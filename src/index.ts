import * as  fs from 'fs';
import * as path from 'path';
import { ApolloServer } from 'apollo-server';
import resolvers from './resolvers';

const typeDefs = fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf-8');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Server running in ${url}`);
});