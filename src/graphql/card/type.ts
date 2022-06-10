import { objectType } from 'nexus';

export const Card = objectType({
	name: 'Card',
	definition(t) {
		t.nonNull.int('id', { description: 'The unique ID of the card' });
		t.nonNull.string('topic', {
			description: 'the topic which the card is about',
		});
		t.nonNull.string('front', {
			description: 'content on the front side of the card',
		});
		t.nonNull.string('back', {
			description: 'content on the back side of the card',
		});
		t.nonNull.boolean('isPublic', {
			description: 'is the card public or private',
		});
		t.field('creator', {
			type: 'User',
			description: 'the user that created the card',
		});
		t.nonNull.int('creatorId', {
			description: 'the id of the user created the card',
		});
	},
});
