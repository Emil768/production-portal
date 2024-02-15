import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export interface Profile {
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
	data?: Profile;
	formData?: Profile;
	isLoading: boolean;
	error?: {};
	readonly: boolean;
	validateErrors?: ValidationErroProfile;
}
