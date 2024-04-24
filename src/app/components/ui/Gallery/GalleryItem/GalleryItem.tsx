import { GalleryItemProps } from "./GalleryItem.props";
import styles from './GalleryItem.module.css';
import cn from 'classnames';
import Link from "next/link";
import Image from "next/image";

export const GalleryItem = ({ item, variant, className, ...props }: GalleryItemProps): JSX.Element => {
    return (
        <Link href={item.link} className={cn(className, styles['row'], {
            [styles['withText']]: item.content,
            [styles['horizont']]: variant === 'horizontal',
            [styles['vertical']]: variant === 'vertical',
        })}>

            <Image className={styles['image']} alt={item.name} src={item.posterPath} layout="fill"
                draggable={false} priority />

            {item.content && (
                <div className={styles['content']}>

                    <div className={styles['title']}>

                        {item.content.title}

                    </div>

                    {item.content.subTiyle && (<div className={styles['subtitle']}>{item.content.subTiyle}</div>)}

                </div>
            )}

        </Link>
    );
};