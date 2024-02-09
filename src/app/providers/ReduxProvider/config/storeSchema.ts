import { UserSchema } from 'entities/User/model/types';
import { LoginSchema } from 'features/AuthByUsername/ui';

export interface StoreSchema {
	user: UserSchema;
	loginForm: LoginSchema;
}
