import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, FC, InputHTMLAttributes, memo } from 'react';
import cls from './Input.module.scss';
import { Text, TextSize, TextTheme } from '../Text/Text';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

export enum InputTheme {
	SQUARE = 'square',
	CIRCLE = 'circle',
}

interface InputProps extends HTMLInputProps {
	className?: string;
	value?: string | number;
	onChange?: (value: string | number) => void;
	theme?: InputTheme;
	readOnly?: boolean;
	validate?: string;
	label?: string;
}

export const Input: FC<InputProps> = memo((props: InputProps) => {
	const {
		value,
		onChange,
		type = 'text',
		className,
		validate,
		theme = 'square',
		readOnly,
		label,
		...otherProps
	} = props;

	const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	};

	return (
		<div className={[cls.Input_wrapper, readOnly && cls.readOnly].join(' ')}>
			{label && <span className={cls.label}>{label}</span>}
			<input
				type={type}
				value={value}
				onChange={onChangeValue}
				className={classNames(cls.Input, { [cls.validate]: Boolean(validate) }, [className, cls[theme]])}
				readOnly={readOnly}
				{...otherProps}
			/>
			{validate && <Text text={validate} size={TextSize.TINY} theme={TextTheme.ERROR} />}
		</div>
	);
});
