import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicReducerWrapper, ReducersList } from '@/shared/lib/DynamicReducerWrapper/DynamicReducerWrapper';
import { commentFormReducer, commentFormSActions } from '../../model/slice';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { useAppDispatch, useAppSelector } from '@/app/providers/ReduxProvider/config/store';
import { getCommentFormTextSelector } from '../../model/selectors';
import cls from './CommentForm.module.scss';

const reducers: ReducersList = {
	commentForm: commentFormReducer,
};

export interface CommentFormProps {
	onCommentSend: (value: string) => void;
}

const CommentForm = memo(({ onCommentSend }: CommentFormProps) => {
	const { t } = useTranslation('articles');
	const dispatch = useAppDispatch();
	const text = useAppSelector(getCommentFormTextSelector);

	const onTextChange = useCallback(
		(value: string) => {
			dispatch(commentFormSActions.setText(value));
		},
		[dispatch],
	);

	const onSendCommentHadnler = useCallback(() => {
		onCommentSend(text);
		onTextChange('');
	}, [text, onCommentSend, onTextChange]);

	return (
		<DynamicReducerWrapper reducers={reducers}>
			<div className={cls.CommentForm}>
				<Input onChange={onTextChange} value={text} placeholder={t('Введите текст')} className={cls.input} />
				<Button onClick={onSendCommentHadnler} theme={ThemeButton.CLEAR} className={cls.button}>
					{t('Добавить')}
				</Button>
			</div>
		</DynamicReducerWrapper>
	);
});

export default CommentForm;
