import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from '@/shared/config/i18n/i18nForTests';
import { MemoryRouter } from 'react-router-dom';
import { ReduxProvier } from '@/app/providers/ReduxProvider';
import { StoreSchema } from '@/app/providers/ReduxProvider/config/storeSchema';

export interface componentRenderOptions {
	route?: string;
	initialState?: StoreSchema;
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
	const { route = '/', initialState } = options;

	return render(
		<ReduxProvier initialState={initialState}>
			<MemoryRouter initialEntries={[route]}>
				<I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
			</MemoryRouter>
		</ReduxProvier>,
	);
}
