import { IMove } from "@/shared/types/movie.types";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface MoviesItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    movie: IMove;
};