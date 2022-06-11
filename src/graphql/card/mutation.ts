import {
	booleanArg,
	extendType,
	intArg,
	nonNull,
	nullable,
	stringArg,
} from 'nexus';
import { createNewCard, deleteCard, updateCard } from './resorver';

export const cardMutation = extendType({
	type: 'Mutation',
	definition(t) {
		t.nonNull.field('createNewCard', {
			type: 'Card',
			description: 'Create a new card from provide information',
			args: {
				topic: nonNull(stringArg()),
				front: nonNull(stringArg()),
				back: nonNull(stringArg()),
				isPublic: nonNull(booleanArg()),
			},
			resolve: createNewCard,
		});

		t.nonNull.field('updateCard', {
			type: 'Card',
			description: 'Update an already existing card with provided information',
			args: {
				id: nonNull(intArg()),
				topic: nullable(stringArg()),
				front: nullable(stringArg()),
				back: nullable(stringArg()),
				isPublic: nullable(stringArg()),
			},
			resolve: updateCard,
		});

		t.nonNull.field('deleteCard', {
			type: 'Boolean',
			description: 'Delete a card from the database by its Id',
			args: {
				id: nonNull(intArg()),
			},
			resolve: deleteCard,
		});
	},
});
