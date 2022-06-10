import { Context } from '../../context';

export const isUserAuthenticated = (
	realUserId: number,
	context: Context
): boolean => {
	const requestUserId = context.userId;
	if (!realUserId) return false;
	if (requestUserId !== realUserId) return false;
	return true;
};

export const isUserAuthorisedToCard = (
	requestUserId: number,
	cardCreatorId: number
): boolean => {
	if (requestUserId !== cardCreatorId) return false;
	return true;
};
