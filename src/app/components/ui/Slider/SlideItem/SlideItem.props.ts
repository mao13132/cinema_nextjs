import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ISlide } from "../Slider.props";


export interface ISlideItem extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    slide: ISlide;
    buttonTitle?: string;
};