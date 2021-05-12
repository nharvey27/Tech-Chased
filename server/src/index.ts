import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import express from "express";
import session from "express-session";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { COOKIE__NAME, __prod__ } from "./constants";
import { User } from "./entities/User";
import { UserResolver } from "./resolvers/user";
import connectRedis from "connect-redis";
import Redis from "ioredis";
import { Project } from "./entities/Project";
import { Ticket } from "./entities/Ticket";
import { ProjectResolver } from "./resolvers/project";
import { TicketResolver } from "./resolvers/ticket";
import "dotenv-safe/config";
declare module "express-session" {
  interface Session {
    userId: number;
  }
}

const main = async () => {
  const RedisStore = connectRedis(session);
  const redis = new Redis(process.env.REDIS_URL);

  //database connection
  await createConnection({
    type: "postgres",
    logging: true,
    url: process.env.DATABASE_URL,
    synchronize: true,
    entities: [User, Project, Ticket],
  });

  //create express session
  const app = express();

  app.set("trust proxy", 1);

  //cors
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
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
        domain: __prod__ ? ".codeponder.com" : undefined,
      },
      saveUninitialized: false,
      secret: "secret",
      resave: false,
    })
  );

  //create Apollo Server instance
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, ProjectResolver, TicketResolver],
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

  app.listen(parseInt(process.env.PORT), () => {
    console.log("server started on  localhost:4000");
  });
};

main().catch((err) => {
  console.log(err);
});
