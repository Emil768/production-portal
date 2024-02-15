import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, FC, InputHTMLAttributes, memo } from 'react';
import cls from './Input.module.scss';

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
}

export const Input: FC<InputProps> = memo((props: InputProps) => {
	const { value, onChange, type = 'text', className, theme = 'square', readOnly } = props;

	const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	};

	return (
		<input
			type={type}
			value={value}
			onChange={onChangeValue}
			className={classNames(cls.Input, { [cls.readOnly]: readOnly }, [className, cls[theme]])}
			readOnly={readOnly}
		/>
	);
});
