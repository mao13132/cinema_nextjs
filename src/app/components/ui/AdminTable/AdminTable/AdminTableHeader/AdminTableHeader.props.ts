import { ChangeEvent, DetailedHTMLProps, HTMLAttributes } from "react";

export interface AdminTableHeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    headerItems: string[];
};