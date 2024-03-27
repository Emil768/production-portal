import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { ReduxProvier } from '@/app/providers/ReduxProvider';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import App from './app/App';
import './shared/config/i18n/i18n';
import { ErrorBoundary } from './app/providers/ErrorBoundary';

const container = document.getElementById('root');

if (!container) {
	throw new Error('Контейнер root не найден. НЕ удалось вмонтировать реакт приложение');
}

const root = createRoot(container);

root.render(
	<BrowserRouter>
		<ReduxProvier>
			<ErrorBoundary>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</ErrorBoundary>
		</ReduxProvier>
	</BrowserRouter>,
);
