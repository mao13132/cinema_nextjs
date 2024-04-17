import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface AdminActionsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    editUrl: string;
    revomeHandler: () => void;
};

