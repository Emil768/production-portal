import React, { useEffect } from 'react';
import { useAppDispatch } from 'app/providers/ReduxProvider/config/store';
import { useParams } from 'react-router-dom';
import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile';
import { DynamicReducerWrapper, ReducersList } from 'shared/lib/DynamicReducerWrapper/DynamicReducerWrapper';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePage.module.scss';

const reducer: ReducersList = {
	profile: profileReducer,
};

const ProfilePage = () => {
	const dispatch = useAppDispatch();
	const { id } = useParams<{ id: string }>();

	useEffect(() => {
		dispatch(fetchProfileData(id));
	}, []);

	return (
		<DynamicReducerWrapper reducers={reducer} removeAfterUnmounting>
			<div className={classNames(cls.ProfilePage, {}, [])}>
				<ProfileCard />
			</div>
		</DynamicReducerWrapper>
	);
};

export default ProfilePage;
