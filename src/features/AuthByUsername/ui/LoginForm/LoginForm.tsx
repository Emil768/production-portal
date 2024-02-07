import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
	className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
	return (
		<div className={classNames(cls.LoginForm, {}, [className])}>
			<Input />
			<Input />
			<Button theme={ThemeButton.CIRCLE}>Войти</Button>
		</div>
	);
};
