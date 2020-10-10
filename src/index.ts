import * as  fs from 'fs';
import * as path from 'path';
import resolvers from './resolvers';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';

const app = express();
const typeDefs = fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf-8');
const server = new ApolloServer({ typeDefs, resolvers });
const PORT = process.env.PORT || 80;

server.applyMiddleware({ app });

app.listen(PORT, () => {
    console.log(`Server running in ${PORT}`);
});