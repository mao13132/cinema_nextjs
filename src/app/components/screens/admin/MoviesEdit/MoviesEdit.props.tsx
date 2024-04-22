import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IGenre, IMove } from "@/shared/types/movie.types";

export interface MoviesEditProps2 extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

};

export interface IMoviesEditProps extends Omit<IMove, 'id'> {

};
