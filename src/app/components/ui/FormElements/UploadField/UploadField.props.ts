import { CSSProperties, DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface UploadFieldProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    folder?: string;
    value?: string;
    onChange: (...event: any[]) => void;
    placeholder: string,
    error?: FieldError;
    isNoImage?: boolean;
};