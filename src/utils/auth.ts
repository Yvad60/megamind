import jwt from 'jsonwebtoken';

const loginSecret = process.env.LOGIN_SECRET || 'alternativeSecret';

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
