import { extendType, intArg, nonNull, stringArg } from 'nexus';
import { deleteUser, updateUser } from './resorver';

export const userMutation = extendType({
	type: 'Mutation',
	definition(t) {
		t.nonNull.field('updateUser', {
			type: 'User',
			description: 'Update information of the user with provided id',
			args: {
				id: nonNull(intArg()),
				email: nonNull(stringArg()),
				password: nonNull(stringArg()),
			},
			resolve: updateUser,
		});

		t.nonNull.field('deleteUser', {
			type: 'Boolean',
			description: 'Delete an existing user by their ID ',
			args: {
				id: nonNull(intArg()),
			},
			resolve: deleteUser,
		});
	},
});
