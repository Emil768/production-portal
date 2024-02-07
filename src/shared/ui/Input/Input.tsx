import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, FC, InputHTMLAttributes } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
	className?: string;
	value?: string;
	onChange?: (value: string) => void;
}

export const Input: FC<InputProps> = (props: InputProps) => {
	const { value, onChange, type = 'text', className } = props;

	const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	};

	return (
		<input type={type} value={value} onChange={onChangeValue} className={classNames(cls.Input, {}, [className])} />
	);
};
