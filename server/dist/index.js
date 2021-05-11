"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const constants_1 = require("./constants");
const User_1 = require("./entities/User");
const user_1 = require("./resolvers/user");
const connect_redis_1 = __importDefault(require("connect-redis"));
const ioredis_1 = __importDefault(require("ioredis"));
const Project_1 = require("./entities/Project");
const Ticket_1 = require("./entities/Ticket");
const project_1 = require("./resolvers/project");
const ticket_1 = require("./resolvers/ticket");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const RedisStore = connect_redis_1.default(express_session_1.default);
    const redis = new ioredis_1.default();
    yield typeorm_1.createConnection({
        type: "postgres",
        database: "techchased",
        logging: true,
        synchronize: true,
        entities: [User_1.User, Project_1.Project, Ticket_1.Ticket],
    });
    const app = express_1.default();
    app.use(cors_1.default({
        origin: "http://localhost:3000",
        credentials: true,
    }));
    app.use(express_session_1.default({
        name: constants_1.COOKIE__NAME,
        store: new RedisStore({ client: redis, disableTouch: true }),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
            httpOnly: true,
            sameSite: "lax",
        },
        saveUninitialized: false,
        secret: "secret",
        resave: false,
    }));
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: yield type_graphql_1.buildSchema({
            resolvers: [user_1.UserResolver, project_1.ProjectResolver, ticket_1.TicketResolver],
            validate: false,
        }),
        context: ({ req, res }) => ({
            req,
            res,
            redis,
        }),
    });
    apolloServer.applyMiddleware({
        app,
        cors: false,
    });
    app.listen(process.env.PORT || 4000, () => {
        console.log("server started on  localhost:4000");
    });
});
main().catch((err) => {
    console.log(err);
});
//# sourceMappingURL=index.js.map