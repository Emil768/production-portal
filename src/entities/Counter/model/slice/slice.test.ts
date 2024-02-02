import { counterReducer } from 'entities/Counter';
import { CounterState } from '../types';
import { counterActions } from '.';

describe('counter slice', () => {
	test('decrementer', () => {
		const state: CounterState = {
			value: 10,
		};

		expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
	});

	test('increment', () => {
		const state: CounterState = {
			value: 10,
		};

		expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
	});

	test('when state is undefined', () => {
		expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
	});
});
