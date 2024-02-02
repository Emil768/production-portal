import { StoreSchema } from 'app/providers/ReduxProvider/config/storeSchema';
import { getInitialValuesCounterSelector } from './selectors';

describe('selectors', () => {
	test('should return initial state', () => {
		const state: StoreSchema = {
			counter: { value: 0 },
		};

		expect(getInitialValuesCounterSelector(state)).toEqual(0);
	});
});
