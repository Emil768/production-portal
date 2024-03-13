import React, { Suspense, useEffect, useState } from 'react';
import '@/app/styles/index.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { userActions } from '@/entities/User/model/slice';
import { useTheme } from '@/app/providers/ThemeProvider';
import { AppRouter } from '@/app/providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { getAuthInitSelector } from '@/entities/User/model/selectors/selectors';
import { useAppDispatch, useAppSelector } from './providers/ReduxProvider/config/store';

function App() {
	const { theme } = useTheme();
	const dispatch = useAppDispatch();
	const isAuthInit = useAppSelector(getAuthInitSelector);

	useEffect(() => {
		dispatch(userActions.initUser());

		document.body.className = theme;
	}, [dispatch]);

	return (
		<div className={classNames('app', {}, [])}>
			<Suspense fallback="">
				<Navbar />

				<div className="content-page">
					<Sidebar />
					{isAuthInit && <AppRouter />}
				</div>
			</Suspense>
		</div>
	);
}

export default App;
