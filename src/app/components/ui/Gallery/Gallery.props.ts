import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IGalleryItem } from "./GalleryItem/GalleryItem.props";

export interface GalleryProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    items: IGalleryItem[];
};