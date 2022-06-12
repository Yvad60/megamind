import jwt from 'jsonwebtoken';
import { LOGIN_SECRET } from './constants';

const loginSecret = LOGIN_SECRET;
export interface AuthTokenPayload {
	userId: number;
}

export const decodeAuthHeader = (authHeader: String): AuthTokenPayload => {
	const token = authHeader.replace('Bearer ', '');
	if (!token) {
		throw new Error('You are not authorised');
	}
	return jwt.verify(token, loginSecret) as AuthTokenPayload;
};
