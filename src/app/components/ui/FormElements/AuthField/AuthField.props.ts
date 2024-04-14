import { DetailedHTMLProps, HTMLAttributes } from "react";
import { FormState, UseFormRegister } from "react-hook-form";

export interface AuthFieldProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    register: UseFormRegister<any>;
    formState: FormState<any>;
    isPasswordRequired?: boolean;
};