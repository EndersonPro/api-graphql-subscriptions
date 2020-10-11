import fs from 'fs';
import path from 'path';
import { ApolloServer } from 'apollo-server';
import resolvers from './resolvers';

// config port
const PORT = process.env.PORT || 8080;

const typeDefs = fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf-8');

const apolloServer = new ApolloServer({ typeDefs, resolvers, introspection: true, playground: true });

apolloServer.listen({ port: PORT }).then(({ url }) => {
    console.log(`Running in ${url}`)
});
