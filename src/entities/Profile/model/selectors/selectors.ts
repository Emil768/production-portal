import { StoreSchema } from 'app/providers/ReduxProvider/config/storeSchema';

export const getProfileDataSelector = (state: StoreSchema) =>
	state?.profile?.data || {
		first: '',
		lastname: '',
		age: 0,
		currency: 'RUB',
		country: '',
		city: '',
		username: '',
		avatar: 'https://elcomercio.pe/resizer/e1z5gC2gsG9HgmrLVUxNHEil9q0=/1200x675/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/37OWRM2CLBAE7BP5SXKLVMNHZE.jpg',
	};

export const getProfileErrorSelector = (state: StoreSchema) => state?.profile.error;

export const getIsProfileLoadingSelector = (state: StoreSchema) => state?.profile.isLoading;
