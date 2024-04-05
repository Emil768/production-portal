import { MouseEvent, useEffect, useState } from 'react';

interface useModalProps {
	isOpen: boolean;
	onClose?: () => void;
}

export const useModal = ({ isOpen, onClose }: useModalProps) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		if (isOpen) {
			setIsMounted(true);
		}
	}, [isOpen]);

	const onCloseModal = (e: MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			// Закрыть только при клике на оверлей
			onClose?.();
		}
	};
	return {
		isMounted,
		onCloseModal,
	};
};
