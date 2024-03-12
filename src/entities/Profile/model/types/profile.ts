import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export interface Profile {
	id?: string;
	lastname?: string;
	age?: number;
	currency?: Currency;
	country?: Country;
	city?: string;
	username?: string;
	avatar?: string;
}

type ProfilePartial<OBJ> = {
	[P in keyof OBJ]?: string;
};

export type ValidationErroProfile = ProfilePartial<Profile & { error: string }>;

export interface ProfileSchema {
	id?: string;
	data?: Profile;
	formData?: Profile;
	isLoading: boolean;
	error?: string;
	readonly: boolean;
	validateErrors?: ValidationErroProfile;
}
