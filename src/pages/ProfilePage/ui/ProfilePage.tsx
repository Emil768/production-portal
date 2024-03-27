import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page/Page';
import { useAppDispatch } from '@/app/providers/ReduxProvider/config/store';
import { ProfileCard, fetchProfileData, profileReducer } from '@/entities/Profile';
import { DynamicReducerWrapper, ReducersList } from '@/shared/lib/DynamicReducerWrapper/DynamicReducerWrapper';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfilePage.module.scss';

const reducer: ReducersList = {
	profile: profileReducer,
};

const ProfilePage = () => {
	const dispatch = useAppDispatch();
	const { id } = useParams<{ id: string }>();

	useEffect(() => {
		if (id) {
			// @ts-ignore
			dispatch(fetchProfileData(id));
		}
	}, []);

	return (
		<DynamicReducerWrapper reducers={reducer} removeAfterUnmounting>
			<Page>
				<div className={classNames(cls.ProfilePage, {}, [])}>
					<ProfileCard />
				</div>
			</Page>
		</DynamicReducerWrapper>
	);
};

export default ProfilePage;
