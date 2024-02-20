import { FC, lazy } from 'react';
import { delayForDemo } from 'shared/lib/delayDemo/delayDemo';
import { CommentFormProps } from './CommentForm';

export const CommentFormAsync = lazy<FC<CommentFormProps>>(() => delayForDemo(import('./CommentForm')));
