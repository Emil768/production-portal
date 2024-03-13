import { StoreSchema } from '@/app/providers/ReduxProvider/config/storeSchema';

export const getInitialValuesLoginSelector = (state: StoreSchema) => {
	return (
		state?.loginForm || {
			username: '',
			password: '',
			error: '',
		}
	);
};
