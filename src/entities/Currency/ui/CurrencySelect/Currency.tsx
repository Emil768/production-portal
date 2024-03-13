import { classNames } from '@/shared/lib/classNames/classNames';
import { Select } from '@/shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { Currency } from '../../model/types';

interface CurrencySelectProps {
	className?: string;
	value?: Currency;
	onChange?: (value: Currency) => void;
	readOnly?: boolean;
}

const options = [
	{ value: Currency.RUB, content: Currency.RUB },
	{ value: Currency.EUR, content: Currency.EUR },
	{ value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(({ className, value, onChange, readOnly }: CurrencySelectProps) => {
	const onChangeHandler = useCallback(
		(value: string) => {
			onChange?.(value as Currency);
		},
		[onChange],
	);

	return (
		<Select
			className={classNames('', {}, [className])}
			options={options}
			value={value}
			onChange={onChangeHandler}
			readOnly={readOnly}
		/>
	);
});
