import { extendType } from 'nexus';
import { getPublicCards, getUserCards } from './resorver';

export const cardQuerry = extendType({
	type: 'Query',
	definition(t) {
		t.nonNull.list.nonNull.field('publicCards', {
			type: 'Card',
			description: 'Return an array of all public cards',
			resolve: getPublicCards,
		});

		t.nonNull.list.nonNull.field('userOwnCards', {
			type: 'Query',
			description: 'Return an array of cards created by specific user',
			resolve: getUserCards,
		});
	},
});
