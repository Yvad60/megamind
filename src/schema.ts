import { makeSchema } from 'nexus';
import { join } from 'path';
import * as types from './graphql/index';

const schema = makeSchema({
	features: {
		abstractTypeStrategies: {
			resolveType: false,
		},
	},
	types,
	outputs: {
		schema: join(process.cwd(), 'schema.graphql'),
		typegen: join(process.cwd(), 'nexus-typegen.ts'),
	},
	contextType: {
		module: join(process.cwd(), 'src/context.ts'),
		export: 'Context',
	},
});
export default schema;
