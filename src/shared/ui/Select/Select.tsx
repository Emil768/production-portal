import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOption {
	value: string;
	content: string;
}

interface SelectProps {
	className?: string;
	value: string;
	onChange?: (value: any) => void;
	options: SelectOption[];
	readOnly?: boolean;
	label?: string;
}

export const Select = memo((props: SelectProps) => {
	const { value, className, options, readOnly, onChange, label } = props;

	const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		if (onChange) {
			onChange(e.target.value);
		}
	};

	const optionsList = useMemo(
		() =>
			options.map((option) => {
				return (
					<option className={cls.Option} value={option.value} key={option.value}>
						{option.content}
					</option>
				);
			}),
		[options],
	);

	return (
		<div className={classNames(cls.Select_wrapper, {}, [className])}>
			{label && <span>{label}</span>}
			<select className={cls.Select} value={value} onChange={onChangeHandler} disabled={readOnly}>
				{optionsList}
			</select>
		</div>
	);
});
