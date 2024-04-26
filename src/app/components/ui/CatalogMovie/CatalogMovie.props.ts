import { IMove } from "@/shared/types/movie.types";
import { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface CatalogMovieProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string;
    description?: string;
    movies: IMove[];
};