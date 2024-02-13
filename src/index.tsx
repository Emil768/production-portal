import { render } from 'react-dom';
import { ReduxProvier } from 'app/providers/ReduxProvider';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import App from './app/App';
import './shared/config/i18n/i18n';
import { ErrorBoundary } from './app/providers/ErrorBoundary';

render(
	<BrowserRouter>
		<ReduxProvier>
			<ErrorBoundary>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</ErrorBoundary>
		</ReduxProvier>
	</BrowserRouter>,
	document.getElementById('root'),
);
