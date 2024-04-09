import { useState } from 'react';

interface events {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

type useHoverType = [boolean, events];

export const useHover = (): useHoverType => {
    const [hovered, setHovered] = useState(false);

    const onMouseEnter = () => {
        setHovered(true);
    };

    const onMouseLeave = () => {
        setHovered(false);
    };

    return [hovered, { onMouseEnter, onMouseLeave }];
};
