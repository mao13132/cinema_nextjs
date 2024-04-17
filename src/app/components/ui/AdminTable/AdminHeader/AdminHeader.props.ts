import { ChangeEvent, DetailedHTMLProps, HTMLAttributes } from "react";

export interface AdminHeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    myClick?: () => void;
    searchTerm: string;
    handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
};