import { extendType } from 'nexus';
import { getPublicCards } from './resorver';

export const cardQuerry = extendType({
	type: 'Query',
	definition(t) {
		t.nonNull.list.nonNull.field('publicCards', {
			type: 'Card',
			description: 'Return an array of all public cards',
			resolve: getPublicCards,
		});
	},
});
