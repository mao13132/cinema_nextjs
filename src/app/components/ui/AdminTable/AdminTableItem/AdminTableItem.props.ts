import { DetailedHTMLProps, HTMLAttributes } from "react";
import { AdminTableProps } from "../AdminTable/AdminTable.props";

export interface AdminTableItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    tableItem: AdminTableProps;
    removeHandler: () => void;
};
