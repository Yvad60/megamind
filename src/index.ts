import { ApolloServer } from 'apollo-server';
import schema from './schema';

const server = new ApolloServer({ schema });
const port = process.env.PORT || 3000;

server.listen({ port }).then(({ url }) => {
	// eslint-disable-next-line no-console
	console.log(`The server is ready at ${url}`);
});

export default server;
