import cn from 'classnames';
import styles from './SlideItem.module.css';
import { ISlideItem } from "./SlideItem.props";
import { MaterialIcon } from '../../MaterialIcon/MaterialIcon';
import { useRouter } from 'next/router';
import Image from 'next/image';

export const SlideItem = ({ className, slide, buttonTitle = 'Смотреть' }: ISlideItem): JSX.Element => {

    const { push } = useRouter();

    return (
        <div className={cn(className, styles['slide'])}>

            {slide.bigPoster && <Image
                fill
                className={styles['image']}
                src={slide.bigPoster}
                alt={slide.title}
                draggable={false}
                sizes="100%"
                unoptimized
                priority
            />}


            <div className={styles['content']}>

                <div className={styles['heading']}>{slide.title}</div>

                <div className={styles['subHeading']}>{slide.subTitle}</div>

                <button className={styles['button']} onClick={() => { push(slide.link) }}>
                    {buttonTitle}
                </button>

            </div>

        </div>
    );
};