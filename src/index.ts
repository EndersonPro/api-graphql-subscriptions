import * as  fs from 'fs';
import * as path from 'path';
import resolvers from './resolvers';
// import express from 'express';
import { ApolloServer } from 'apollo-server';
// import cors from 'cors';
// import { createServer } from 'http';
// import { SubscriptionServer } from 'subscriptions-transport-ws'
// import { execute, subscribe } from 'graphql';

// const app = express();

// // config cors middleware
// app.use(cors());

// config port
const PORT = process.env.PORT || 80;

// app.use('/graphql', express.json());

// read to schema
const typeDefs = fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf-8');

const apolloServer  = new ApolloServer({ typeDefs, resolvers, introspection: true, playground: true });

apolloServer.listen({ port: PORT }).then(({ url }) => {
    console.log(`Running in ${url}`)
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