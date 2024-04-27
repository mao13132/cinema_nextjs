import { DetailedHTMLProps, HTMLAttributes } from "react";

interface ILink {
    id: string;
    link: string;
    title: string;
}

export interface ContentListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    name: string;
    links: ILink[]
};