import { DetailedHTMLProps, HTMLAttributes, LinkHTMLAttributes } from "react";

export interface GalleryItemProps extends DetailedHTMLProps<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement> {
    item: IGalleryItem;
    variant: 'vertical' | 'horizontal';

};


export interface IGalleryItem {
    posterPath: string,
    name: string;
    link: string;
    content?: {
        title: string;
        subTiyle?: string
    }
}

