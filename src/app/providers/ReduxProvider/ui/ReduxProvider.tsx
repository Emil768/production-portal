import React, { FC, ReactNode, useMemo, useState } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StoreSchema } from '../config/storeSchema';

interface ReduxProvierProps {
	children: ReactNode;
	initialState?: StoreSchema;
}

const ReduxProvier: FC<ReduxProvierProps> = ({ children, initialState }) => {
	const store = createReduxStore(initialState);

	return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvier;
