import { ApolloServer } from 'apollo-server';
// import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import schema from './schema';
import { context } from './context';

const server = new ApolloServer({
	schema,
	context,
});
const port = process.env.PORT || 3000;

server.listen({ port }).then(({ url }) => {
	// eslint-disable-next-line no-console
	console.log(`The server is ready at ${url}`);
});

export default server;
