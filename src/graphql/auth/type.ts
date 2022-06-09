import { objectType } from 'nexus';

export const AuthPayload = objectType({
	name: 'AuthPayload',
	definition(t) {
		t.nonNull.string('token', {
			description: 'The unique token required to authorize a user',
		});
		t.field('user', { type: 'User', description: 'The authorized user' });
	},
});
