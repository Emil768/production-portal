import React, { memo, useCallback, useEffect } from 'react';
import { DynamicReducerWrapper, ReducersList } from 'shared/lib/DynamicReducerWrapper/DynamicReducerWrapper';
import { loginByUserName } from 'features/AuthByUsername/model/services/LoginByUsername';
import { useAppDispatch, useAppSelector } from 'app/providers/ReduxProvider/config/store';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getInitialValuesLoginSelector } from 'features/AuthByUsername/model/selectors';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
	className?: string;
}

const initialReducers: ReducersList = {
	loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	const { username, password, error } = useAppSelector(getInitialValuesLoginSelector);

	const onChangeUsername = useCallback((value) => {
		dispatch(loginActions.setUsername(value));
	}, []);

	const onChangePassword = useCallback(
		(value) => {
			dispatch(loginActions.setPassword(value));
		},
		[dispatch],
	);

	const onLoginClick = useCallback(() => {
		dispatch(loginByUserName({ username, password }));
	}, [dispatch, username, password]);

	return (
		<DynamicReducerWrapper reducers={initialReducers} removeAfterUnmounting={false}>
			<div className={classNames(cls.LoginForm, {}, [className])}>
				<Text title={`${t('Форма авторизации')}`} className={cls.title} />
				{error && <Text text={error} theme={TextTheme.RED} />}
				<Input onChange={onChangeUsername} value={username} />
				<Input onChange={onChangePassword} value={password} />
				<Button theme={ThemeButton.CIRCLE} onClick={onLoginClick}>
					{t('Войти')}
				</Button>
			</div>
		</DynamicReducerWrapper>
	);
});

export default LoginForm;
