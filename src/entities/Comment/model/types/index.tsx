import { User } from '@/entities/User/model/types';

export interface Comment {
	id: string;
	text: string;
	user: User;
}
