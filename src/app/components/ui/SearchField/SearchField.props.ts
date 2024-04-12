import { ChangeEvent, DetailedHTMLProps, HTMLAttributes } from "react";

export interface SearchFieldProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    searchTerm: string;
    handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
};