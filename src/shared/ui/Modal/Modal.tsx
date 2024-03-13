import { classNames } from '@/shared/lib/classNames/classNames';
import { FC, MouseEvent, ReactNode } from 'react';
import { useModal } from '@/shared/lib/hooks/useModal';
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
	const { isMounted, onCloseModal } = useModal({ isOpen, onClose });

	const mods = {
		[cls.opened]: isOpen,
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
