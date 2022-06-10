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
	const { userId } = args;
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
	const { creatorUserId } = args;
	const { topic, front, back, isPublic } = args;
	const newCard = await context.prisma.card.create({
		data: { topic, front, back, isPublic, creatorId: creatorUserId },
	});
	return newCard;
};

export const updatecard = async (parent: any, args: any, context: Context) => {
	const { id, topic, front, back, isPublic } = args;
	const updatedCard = await context.prisma.card.update({
		where: { id },
		data: { topic, front, back, isPublic },
	});
	return updatedCard;
};

export const deleteCard = async (parent: any, args: any, context: Context) => {
	const { id } = args;
	const userDeleted = await context.prisma.card.delete({
		where: { id },
	});
	if (userDeleted) return true;
	return false;
};
