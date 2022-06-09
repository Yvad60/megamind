import { Context } from '../../context';

export const getAllUsers = (_parent: any, _args: any, context: Context) => {
	const allUsers = context.prisma.user.findMany();
	return allUsers;
};

export const updateUser = (parent: any, args: any, context: Context) => {
	const { id, email, password } = args;
	const updatedUser = context.prisma.user.update({
		where: { id },
		data: { email, password },
	});
	return updatedUser;
};

export const deleteUser = (parent: any, args: any, context: Context) => {
	const { id } = args;
	context.prisma.user.delete({ where: { id } });
	return true;
};
