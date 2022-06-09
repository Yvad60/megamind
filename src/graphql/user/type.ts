import { objectType } from 'nexus';

export const User = objectType({
	name: 'User',
	definition(t) {
		t.nonNull.int('id', { description: 'The unique ID of the user' });
		t.nonNull.string('email', { description: 'The unique email of the user' });
		t.nonNull.string('password', { description: 'The password of the user' });
	},
});
