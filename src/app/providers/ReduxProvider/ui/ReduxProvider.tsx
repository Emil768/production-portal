import React, { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StoreSchema } from '../config/storeSchema';

interface ReduxProvierProps {
	children: ReactNode;
	initialState?: StoreSchema;
}

const ReduxProvier: FC<ReduxProvierProps> = ({ children, initialState }) => {
	const navigate = useNavigate();

	const store = createReduxStore({ initialState, navigate });

	return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvier;
