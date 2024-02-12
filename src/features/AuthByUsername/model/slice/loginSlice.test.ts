import { loginActions, loginReducer } from '.';
import { LoginSchema } from '../types';

describe('loginSlice.test', () => {
	test('test set username', () => {
		const state: LoginSchema = { username: '123', isLoading: false, password: '123' };
		expect(loginReducer(state as LoginSchema, loginActions.setUsername('123123'))).toEqual({
			username: '123123',
			isLoading: false,
			password: '123',
		});
	});
});
