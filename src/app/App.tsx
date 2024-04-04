import React, { Suspense, useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { userActions } from '@/entities/User/model/slice';
import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { getAuthInitSelector } from '@/entities/User/model/selectors/selectors';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import './styles/index.scss';

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
