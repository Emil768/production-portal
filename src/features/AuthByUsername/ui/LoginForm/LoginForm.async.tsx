import { FC, lazy } from 'react';
import { delayForDemo } from 'shared/lib/delayDemo/delayDemo';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => delayForDemo(import('./LoginForm')));
