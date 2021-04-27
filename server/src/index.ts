import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import express from "express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { User } from "./entities/User";
import { UserResolver } from "./resolvers/user";

const main = async () => {
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

  //create Apollo Server instance
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
      validate: false,
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
