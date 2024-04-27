import { DetailedHTMLProps, FC, HTMLAttributes, InputHTMLAttributes } from "react";

export interface BannerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    image: string;
    Detail?: FC | null;
};