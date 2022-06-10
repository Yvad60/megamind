import { Context } from '../../context';

export const getAllUsers = async (
	parent: any,
	_args: any,
	context: Context
) => {
	const allUsers = await context.prisma.user.findMany();
	return allUsers;
};

export const updateUser = async (parent: any, args: any, context: Context) => {
	const { id, email, password } = args;
	const updatedUser = await context.prisma.user.update({
		where: { id },
		data: { email, password },
	});
	return updatedUser;
};

export const deleteUser = async (parent: any, args: any, context: Context) => {
	const { id } = args;
	await context.prisma.user.delete({ where: { id } });
	return true;
};
