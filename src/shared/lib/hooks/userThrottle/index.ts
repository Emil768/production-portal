import { useCallback, useRef } from 'react';

export const useThrottle = (callback: (...args: any[]) => void, delay: number) => {
	const isThrottleRef = useRef(false);

	return useCallback(
		(...args: any[]) => {
			if (!isThrottleRef.current) {
				callback(...args);
				isThrottleRef.current = true;

				setTimeout(() => {
					isThrottleRef.current = false;
				}, delay);
			}
		},
		[callback, delay],
	);
};
