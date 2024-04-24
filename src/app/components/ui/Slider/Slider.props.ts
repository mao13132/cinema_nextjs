import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IMove } from "@/shared/types/movie.types";

export interface SliderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {


};


export interface ISlide extends Pick<IMove, 'id' | 'bigPoster' | 'title'> {
    subTitle: string;
    link: string
};


export interface ISlider {
    slides: ISlide[];
    buttonTitle?: string
}