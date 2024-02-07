import { classNames } from 'shared/lib/classNames/classNames';
import { FC, MouseEvent } from 'react';
import cls from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface ModalProps {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ className, children, isOpen, onClose }) => {
	const mods = {
		[cls.opened]: isOpen,
	};

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
