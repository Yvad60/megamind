import { extendType } from 'nexus';
import { getAllUsers } from './resorver';

export const userQuerry = extendType({
	type: 'Query',
	definition(t) {
		t.nonNull.list.nonNull.field('allUsers', {
			type: 'User',
			description: 'Returns a list of all users in the database',
			resolve: getAllUsers,
		});
	},
});
