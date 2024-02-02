import React from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../slice';

import { getInitialValuesCounterSelector } from '../selectors/selectors';

function Counter() {
	const { t } = useTranslation();
	const count = useSelector(getInitialValuesCounterSelector);
	const dispatch = useDispatch();

	return (
		<div>
			<div>
				<Button onClick={() => dispatch(counterActions.increment())} data-testid="increment">
					{t('Увеличить')}
				</Button>
				<span data-testid="count">{count}</span>
				<Button onClick={() => dispatch(counterActions.decrement())} data-testid="decrement">
					{t('Уменьшить')}
				</Button>
			</div>
		</div>
	);
}

export default Counter;
