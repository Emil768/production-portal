import { lazy } from 'react';
import { delayForDemo } from 'shared/lib/delayDemo/delayDemo';

export const ArticlesPageAsync = lazy(() => delayForDemo(import('./ArticlesPage')));
