import React from 'react';

export interface SidebarItemType {
    path: string;
    icon: {
        dark: React.VFC<React.SVGProps<SVGSVGElement>>;
        light: React.VFC<React.SVGProps<SVGSVGElement>>;
    };
    text: string;
    isAuth?: boolean;
}
