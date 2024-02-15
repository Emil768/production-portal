import { Profile, ValidationErroProfile } from '../../types/profile';

export const validateFieldsError = (profile: Profile) => {
	const errors: ValidationErroProfile = {};

	if (profile.username.trim() === '') {
		errors.username = 'Имя не должно быть пустым';
	}

	if (profile.lastname.trim() !== '') {
		errors.lastname = 'Имя не должно быть пустым';
	}

	if (!Number.isInteger(profile.age) || profile.age > 100) {
		errors.age = 'Не валидный возраст';
	}

	return errors;
};
