import { fireEvent, screen } from '@testing-library/react';

import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import Counter from './Counter';

describe('Counter', () => {
	test('with only first param', () => {
		componentRender(<Counter />, {
			initialState: {
				counter: {
					value: 12,
				},
				user: null,
			},
		});

		fireEvent.click(screen.getByTestId('increment'));
		expect(screen.getByTestId('count')).toHaveTextContent('13');
	});

	test('with only first param', () => {
		componentRender(<Counter />, {
			initialState: {
				counter: {
					value: 12,
				},
				user: null,
			},
		});

		fireEvent.click(screen.getByTestId('decrement'));
		expect(screen.getByTestId('count')).toHaveTextContent('11');
	});
});
