import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IActor } from "@/shared/types/movie.types";

export interface ActorEditProps2 extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

};

export interface IActorEditProps extends Omit<IActor, 'id'> {

};
