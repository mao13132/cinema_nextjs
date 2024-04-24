import { IGalleryItem } from "@/components/ui/Gallery/GalleryItem/GalleryItem.props";
import { ISlide } from "@/components/ui/Slider/Slider.props";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface HomeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    slides: ISlide[]
    trendingMoves: IGalleryItem[];
    actors: IGalleryItem[];
};