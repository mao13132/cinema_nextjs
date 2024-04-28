import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface AuthPlaceholderPlayerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    slug: string;
};