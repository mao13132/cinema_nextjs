import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface HeadingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string
};