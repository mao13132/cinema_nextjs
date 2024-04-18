import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IGenre } from "@/shared/types/movie.types";

export interface GenreEditProps2 extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

};

export interface IGenreEditProps extends Omit<IGenre, 'id'> {

};
