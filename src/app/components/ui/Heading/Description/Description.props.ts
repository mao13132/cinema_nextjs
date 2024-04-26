import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface DescriptionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    text: string
};