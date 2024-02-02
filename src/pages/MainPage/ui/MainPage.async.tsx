import { lazy } from 'react';
import { delayForDemo } from 'shared/lib/delayDemo/delayDemo';

export const MainPageAsync = lazy(() => delayForDemo(import('./MainPage')));
