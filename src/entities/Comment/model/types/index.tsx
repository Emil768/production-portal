import { UserType } from '@/entities/User';

export interface Comment {
	id: string;
	text: string;
	user: UserType;
}
