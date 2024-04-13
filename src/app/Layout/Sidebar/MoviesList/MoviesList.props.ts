import { IMove } from "@/shared/types/movie.types";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface MoviesListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string;
    link:string;
    movies: IMove[]
};