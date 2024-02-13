import React, { useEffect } from 'react';
import { useAppDispatch } from 'app/providers/ReduxProvider/config/store';
import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile';
import { DynamicReducerWrapper, ReducersList } from 'shared/lib/DynamicReducerWrapper/DynamicReducerWrapper';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePage.module.scss';

const reducer: ReducersList = {
	profile: profileReducer,
};

const ProfilePage = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchProfileData());
	}, []);

	return (
		<DynamicReducerWrapper reducers={reducer} removeAfterUnmounting>
			<div className={classNames(cls.LoginForm, {}, [])}>
				<ProfileCard />
			</div>
		</DynamicReducerWrapper>
	);
};

export default ProfilePage;
