import { extendType, nonNull, stringArg } from 'nexus';
import { loginUser, registerNewUser } from './resorvers';

export const authMutation = extendType({
	type: 'Mutation',
	definition(t) {
		t.nonNull.field('signUp', {
			type: 'AuthPayload',
			description:
				'Create a new user with provided email and password and names',
			args: {
				email: nonNull(stringArg()),
				password: nonNull(stringArg()),
				names: nonNull(stringArg()),
			},
			resolve: registerNewUser,
		});

		t.nonNull.field('login', {
			type: 'AuthPayload' || 'BadRequest',
			description: 'Authenticate a user from provided email and password',
			args: {
				email: nonNull(stringArg()),
				password: nonNull(stringArg()),
			},
			resolve: loginUser,
		});
	},
});
