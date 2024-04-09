import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { DynamicReducerWrapper, ReducersList } from '@/shared/lib/DynamicReducerWrapper/DynamicReducerWrapper';
import { loginByUserName } from '../../model/services/LoginByUsername';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { loginActions, loginReducer } from '../../model/slice';
import { Text, TextTheme } from '@/shared/ui/Text';
import { getInitialValuesLoginSelector } from '../../model/selectors';
import { Input, InputTheme } from '@/shared/ui/Input';
import cls from './LoginForm.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';

export interface LoginFormProps {
	className?: string;
	onClose: () => void;
}

const initialReducers: ReducersList = {
	loginForm: loginReducer,
};

const LoginForm = memo(({ className, onClose }: LoginFormProps) => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	const { username, password, error } = useAppSelector(getInitialValuesLoginSelector);

	const onChangeUsername = useCallback((value: string) => {
		dispatch(loginActions.setUsername(value));
	}, []);

	const onChangePassword = useCallback(
		(value: string) => {
			dispatch(loginActions.setPassword(value));
		},
		[dispatch],
	);

	const onLoginClick = useCallback(async () => {
		const result = await dispatch(loginByUserName({ username, password }));

		if (result.meta.requestStatus === 'fulfilled') {
			onClose();
		}
	}, [dispatch, onClose, username, password]);

	return (
		<DynamicReducerWrapper reducers={initialReducers} removeAfterUnmounting={false}>
			<div className={classNames(cls.LoginForm, {}, [className])}>
				<Text title={`${t('Форма авторизации')}`} className={cls.title} />
				{error && <Text text={error} theme={TextTheme.RED} />}
				<Input onChange={onChangeUsername} value={username} theme={InputTheme.CIRCLE} />
				<Input onChange={onChangePassword} value={password} theme={InputTheme.CIRCLE} />
				<Button theme={ThemeButton.CIRCLE} onClick={onLoginClick}>
					{t('Войти')}
				</Button>
			</div>
		</DynamicReducerWrapper>
	);
});

export default LoginForm;
