import { lazy } from 'react';
import { delayForDemo } from 'shared/lib/delayDemo/delayDemo';

export const ArticlesDetailPageAsync = lazy(() => delayForDemo(import('./ArticlesDetailPage')));
