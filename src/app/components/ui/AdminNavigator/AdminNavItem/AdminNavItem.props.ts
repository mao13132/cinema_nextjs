import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface AdminNavItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    title: string,
    link: string;
};

export interface INavItem {
    title: string,
    link: string
};