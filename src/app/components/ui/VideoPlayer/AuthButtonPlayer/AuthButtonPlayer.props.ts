import { DetailedHTMLProps, HTMLAttributes, LinkHTMLAttributes } from "react";

export interface AuthButtonPlayerProps extends DetailedHTMLProps<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement> {
    slug: string;
};