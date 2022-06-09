import { extendType, intArg, nonNull, objectType, stringArg } from 'nexus';

export const User = objectType({
	name: 'User',
	definition(t) {
		t.nonNull.int('id', { description: 'The unique ID of the user' });
		t.nonNull.string('email', { description: 'The unique email of the user' });
		t.nonNull.string('password', { description: 'The password of the user' });
	},
});

export const userQuerry = extendType({
	type: 'Query',
	definition(t) {
		t.nonNull.list.nonNull.field('AllUsers', {
			type: 'User',
			description: 'Returns a list of all users in the database',
			resolve: (parent, args, context) => context.prisma.user.findMany(),
		});
	},
});

export const userMutation = extendType({
	type: 'Mutation',
	definition(t) {
		t.nonNull.field('registerUser', {
			type: 'User',
			description: 'Create a new user with provided email and password',
			args: {
				email: nonNull(stringArg()),
				password: nonNull(stringArg()),
			},
			resolve: (parent, args, context) => {
				const { email, password } = args;
				const newUser = context.prisma.user.create({
					data: { email, password },
				});
				return newUser;
			},
		});

		t.nonNull.field('updateUser', {
			type: 'User',
			description: 'Update information of the user with provided id',
			args: {
				id: nonNull(intArg()),
				email: nonNull(stringArg()),
				password: nonNull(stringArg()),
			},
			resolve: (parent, args, context) => {
				const { id, email, password } = args;
				const updatedUser = context.prisma.user.update({
					where: { id },
					data: { email, password },
				});
				return updatedUser;
			},
		});
		t.nonNull.field('deleteUser', {
			type: 'Boolean',
			description: 'Delete an existing user by their ID ',
			args: {
				id: nonNull(intArg()),
			},
			resolve: (parent, args, context) => {
				const { id } = args;
				context.prisma.user.findUnique({ where: { id } });
				return true;
			},
		});
	},
});
