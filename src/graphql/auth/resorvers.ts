import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { Context } from '../../context';
import { LOGIN_SECRET } from '../../utils/constants';

export const registerNewUser = async (
	parent: any,
	args: any,
	context: Context
) => {
	const { email, password, names } = args;
	const hashedPassword = await bcrypt.hash(password, 10);
	const newUser = await context.prisma.user.create({
		data: { email, password: hashedPassword, names },
	});
	const token = jwt.sign({ userId: newUser.id }, LOGIN_SECRET);
	const payload = { token, user: newUser };
	return payload;
};

export const loginUser = async (parent: any, args: any, context: Context) => {
	const existingUser = await context.prisma.user.findUnique({
		where: { email: args.email },
	});
	if (!existingUser)
		return { errorType: 'BadRequest', message: 'The user does not exist' };
	const isPasswordValid = await bcrypt.compare(
		args.password,
		existingUser.password
	);
	if (!isPasswordValid) throw new Error('Invalid email or password');
	const token = jwt.sign(
		{ userId: existingUser.id },
		process.env.LOGIN_SECRET || 'alternativeSecret'
	);
	const payload = { token, user: existingUser };
	return payload;
};
