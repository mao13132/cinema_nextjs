import { DetailedHTMLProps, HTMLAttributes } from "react";
import { AdminTableItemProps } from "../AdminTableItem/AdminTableItem.props";

export interface AdminTableProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    id:string;
    editUrl:string;
    items: string[];
};


export interface IAdminTable extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    tableItems: AdminTableProps[],
    isLoading: boolean;
    headItems: string[];
    removeHandler: (id:string) => void;
};

