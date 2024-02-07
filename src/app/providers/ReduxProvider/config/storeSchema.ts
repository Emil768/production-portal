import { CounterState } from 'entities/Counter';
import { UserSchema } from 'entities/User/model/types';

export interface StoreSchema {
	counter: CounterState;
	user: UserSchema;
}
