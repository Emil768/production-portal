import { lazy } from 'react';
import { delayForDemo } from 'shared/lib/delayDemo/delayDemo';

export const ProfilePageAsync = lazy(() => delayForDemo(import('./ProfilePage')));
