import { IActor } from "@/shared/types/movie.types";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ActorsListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { };


export interface IActorEditProps extends Omit<IActor, 'id'> {

};
