import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { Context } from '../../context';

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
	const token = jwt.sign(
		{ id: newUser.id },
		process.env.LOGIN_SECRET || 'alternativeSecret'
	);
	const payload = { token, user: newUser };
	return payload;
};

export const loginUser = async (parent: any, args: any, context: Context) => {
	const userExist = await context.prisma.user.findUnique({
		where: { email: args.email },
	});
	if (!userExist) throw new Error('Invalid email or password');
	const isPasswordValid = await bcrypt.compare(
		args.password,
		userExist.password
	);
	if (!isPasswordValid) throw new Error('Invalid email or password');
	const token = jwt.sign(
		{ id: userExist.id },
		process.env.LOGIN_SECRET || 'alternativeSecret'
	);
	const payload = { token, user: userExist };
	return payload;
};
