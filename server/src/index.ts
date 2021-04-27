import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import express from "express";
import session from "express-session";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { COOKIE__NAME } from "./constants";
import { User } from "./entities/User";
import { UserResolver } from "./resolvers/user";
import connectRedis from "connect-redis";
import Redis from "ioredis";

declare module "express-session" {
  interface Session {
    userId: number;
  }
}

const main = async () => {
  const RedisStore = connectRedis(session);
  const redis = new Redis();

  //database connection
  await createConnection({
    type: "postgres",
    database: "techchased",
    logging: true,
    synchronize: true,
    entities: [User],
  });

  //create express session
  const app = express();

  //cors
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  app.use(
    session({
      name: COOKIE__NAME,
      store: new RedisStore({ client: redis, disableTouch: true }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        httpOnly: true,
        sameSite: "lax",
      },
      saveUninitialized: false,
      secret: "secret",
      resave: false,
    })
  );

  //create Apollo Server instance
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({
      req,
      res,
      redis,
    }),
  });

  //apply apollo middleware to our app instance
  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(4000, () => {
    console.log("server started on  localhost:4000");
  });
};

main().catch((err) => {
  console.log(err);
});
