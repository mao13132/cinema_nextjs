import { GalleryProps } from "./Gallery.props";
import styles from './Gallery.module.css';
import cn from 'classnames';
import { GalleryItem } from "./GalleryItem/GalleryItem";

export const Gallery = ({ items, className, ...props }: GalleryProps): JSX.Element => {
    return (
        <div className={cn(className, styles['gallery'])} {...props}>

            {items.map((item, idx) => <GalleryItem key={idx} item={item} variant="vertical" />)}

        </div>
    );
};