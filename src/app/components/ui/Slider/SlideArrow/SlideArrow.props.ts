import { DetailedHTMLProps, HTMLAttributes } from "react";


export interface ISlideArrow {
    variant: 'left' | 'right';
    clickHandler: () => void;
};