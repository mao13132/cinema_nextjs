import { DetailedHTMLProps, HTMLAttributes } from "react";
import { FieldProps } from "../FormElements/Field/Field.props";
import { Options } from 'react-select';
import { ControllerRenderProps } from "react-hook-form";

export interface SelectProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    options: Options<IOption>;
    isMulti?: boolean;
    field: ControllerRenderProps<any, any>;
    isLoading?: boolean;
    placeholder: string;
    errors?: string | undefined;
};

export interface IOption {
    value: string,
    label: string,
}

export interface ISelect extends FieldProps {
    options: Options<IOption>;
    isMulti?: boolean;
    field: ControllerRenderProps<any, any>;
    isLoading?: boolean;
}
