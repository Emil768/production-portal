import { lazy } from 'react';
import { delayForDemo } from 'shared/lib/delayDemo/delayDemo';

export const AboutPageAsync = lazy(() => delayForDemo(import('./AboutPage')));
