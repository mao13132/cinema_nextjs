import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

export interface SlugFieldProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    error?: FieldError;
    register: UseFormRegister<any>;
    generate: () => void;
};