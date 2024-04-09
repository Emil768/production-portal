import { MutableRefObject, useEffect } from 'react';

interface UseInfinityScrollProps {
    callback?: () => void;
    wrapperRef: MutableRefObject<HTMLDivElement>;
    triggerRef: MutableRefObject<HTMLDivElement>;
}

export const useInfinityScroll = ({
    callback,
    wrapperRef,
    triggerRef,
}: UseInfinityScrollProps) => {
    useEffect(() => {
        let observer: IntersectionObserver | null = null;
        const wrapperElement = wrapperRef.current;
        const triggerElement = triggerRef.current;

        if (callback) {
            const options = {
                root: wrapperElement,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(triggerElement);
        }

        return () => {
            if (observer && triggerElement) {
                observer.unobserve(triggerElement);
            }
        };
    }, [triggerRef, wrapperRef, callback]);
};
