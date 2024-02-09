import React, { Suspense, useEffect } from 'react';
import 'app/styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { userActions } from 'entities/User/model/slice';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useAppDispatch } from './providers/ReduxProvider/config/store';

function App() {
	const { theme } = useTheme();
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(userActions.initUser());
		document.body.className = theme;
	}, []);

	return (
		<div className={classNames('app', {}, [])}>
			<Suspense fallback="">
				<Navbar />

				<div className="content-page">
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
}

export default App;
