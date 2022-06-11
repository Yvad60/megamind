import { Context } from '../../context';

export const getPublicCards = async (
	parent: any,
	args: any,
	context: Context
) => {
	const publicCards = await context.prisma.card.findMany({
		where: { isPublic: true },
	});
	return publicCards;
};

export const getUserCards = async (
	parent: any,
	args: any,
	context: Context
) => {
	const { userId } = context;
	if (!userId) throw new Error('You need to login first');
	const userOwnCards = await context.prisma.card.findMany({
		where: { creatorId: userId },
	});
	return userOwnCards;
};

export const createNewCard = async (
	parent: any,
	args: any,
	context: Context
) => {
	const { userId } = context;
	if (!userId) throw new Error('You need to login first');
	const { topic, front, back, isPublic } = args;
	const newCard = await context.prisma.card.create({
		data: { topic, front, back, isPublic, creatorId: userId },
	});
	return newCard;
};

export const updateCard = async (parent: any, args: any, context: Context) => {
	const { id, topic, front, back, isPublic } = args;
	const { userId } = context;
	if (!userId) throw new Error('You need to login first');
	const cardToUpdate = await context.prisma.card.findUnique({ where: { id } });
	if (!cardToUpdate) throw new Error('Card does not exist');
	if (cardToUpdate.creatorId !== userId)
		throw new Error("You don't have permission to do this action");
	const updatedCard = await context.prisma.card.update({
		where: { id },
		data: { topic, front, back, isPublic },
	});
	return updatedCard;
};

export const deleteCard = async (parent: any, args: any, context: Context) => {
	const { id } = args;
	const { userId } = context;
	if (!userId) throw new Error('You need to login first');
	const cardToDelete = await context.prisma.card.findUnique({ where: { id } });
	if (!cardToDelete) throw new Error('Card does not exist');
	if (cardToDelete.creatorId !== userId)
		throw new Error("You don't have permission to do this action");
	const cardDeleted = await context.prisma.card.delete({
		where: { id },
	});
	if (cardDeleted) return true;
	return false;
};
