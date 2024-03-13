import React, { Suspense, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Modal } from '@/shared/ui/Modal/Modal';
import cls from './LoginModal.module.scss';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}

export const LoginModal = memo(({ className, isOpen, onClose }: LoginModalProps) => {
	return (
		<Modal className={classNames(cls.LoginModal, {}, [className])} isOpen={isOpen} onClose={onClose} lazy>
			<Suspense fallback={<Loader />}>
				<LoginFormAsync onClose={onClose} />
			</Suspense>
		</Modal>
	);
});
