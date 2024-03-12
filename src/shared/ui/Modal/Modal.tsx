import { classNames } from 'shared/lib/classNames/classNames';
import { FC, MouseEvent, ReactNode, useEffect, useState } from 'react';
import cls from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface ModalProps {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
	lazy?: boolean;
	children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ className, children, isOpen, onClose, lazy }) => {
	const [isMounted, setIsMounted] = useState(false);

	const mods = {
		[cls.opened]: isOpen,
	};

	useEffect(() => {
		if (isOpen) {
			setIsMounted(true);
		}
	}, [isOpen]);

	const onCloseModal = (e: MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			// Закрыть только при клике на оверлей
			onClose();
		}
	};
	const onEscapeKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			onClose();
		}
	};

	if (lazy && !isMounted) {
		return null;
	}

	return (
		<Portal>
			<div className={classNames(cls.Modal, mods, [className])}>
				<div className={cls.overlay} onClick={onCloseModal}>
					<div className={cls.content}>{children}</div>
				</div>
			</div>
		</Portal>
	);
};
