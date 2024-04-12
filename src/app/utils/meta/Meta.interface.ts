import { ReactNode } from "react";

export interface ISeo {
    title: string,
    descriptions?: string,
    image?: string,
    children: ReactNode,
}