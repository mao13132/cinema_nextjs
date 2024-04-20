import { EditorProps } from "draft-js";
import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes, ReactNode } from "react";
import { FieldError } from "react-hook-form";


interface TextEditorProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    placeholder: string
    error?: FieldError | undefined;
};


type TypeEditorProps = EditorProps & TextEditorProps;

export interface EditorTextProps extends Omit<TypeEditorProps, 'editorState'> {
    onChange: (...event: any[]) => void;
    value: string;
};
