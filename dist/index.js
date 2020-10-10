"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var resolvers_1 = __importDefault(require("./resolvers"));
// import express from 'express';
var apollo_server_1 = require("apollo-server");
// import cors from 'cors';
// import { createServer } from 'http';
// import { SubscriptionServer } from 'subscriptions-transport-ws'
// import { execute, subscribe } from 'graphql';
// const app = express();
// // config cors middleware
// app.use(cors());
// config port
var PORT = process.env.PORT || 80;
// app.use('/graphql', express.json());
// read to schema
var typeDefs = fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf-8');
var apolloServer = new apollo_server_1.ApolloServer({ typeDefs: typeDefs, resolvers: resolvers_1.default, introspection: true, playground: true });
apolloServer.listen({ port: PORT }).then(function (_a) {
    var url = _a.url;
    console.log("Running in " + url);
});
// const server = createServer(app);
// apolloServer.applyMiddleware({ app });
// server.listen(PORT, () => {
//     new SubscriptionServer({
//         execute,
//         subscribe,
//         schema: typeDefs,
//     }, {
//         server,
//         path: '/subscriptions'
//     });
//     console.log(`Server running in ${PORT}`);
// });
//# sourceMappingURL=index.js.map