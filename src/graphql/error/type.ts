import { interfaceType, objectType } from 'nexus';

export const Errors = interfaceType({
	name: 'Error',
	definition(t) {
		t.nonNull.string('errorType', {
			description: 'The type of the error that occured',
		});
		t.nonNull.string('errorMessage', {
			description: 'The message explaining what could have gone wrong',
		});
	},
});

export const DataNotFound = objectType({
	name: 'DataNotFound',
	definition(t) {
		t.implements(Errors);
	},
});

export const NoAccess = objectType({
	name: 'NoAccess',
	definition(t) {
		t.implements(Errors);
	},
});

export const NotLoggedIn = objectType({
	name: 'NotLoggedIn',
	definition(t) {
		t.implements(Errors);
	},
});

export const BadRequest = objectType({
	name: 'BadRequest',
	definition(t) {
		t.implements(Errors);
	},
});
