import styles from './Banner.module.css';
import cn from 'classnames';
import { BannerProps } from './Banner.props';
import Image from 'next/image';

export const Banner = ({ image, Detail, className, ...props }: BannerProps): JSX.Element => {


    return (
        <div className={cn(styles['banner'], className)} {...props} >

            {image && <Image
                src={image}
                fill
                sizes='100%'
                draggable={false}
                alt=''
                className={styles['img']}
                unoptimized
                priority
            />}

            {Detail && <div className={styles['content']}><Detail /></div>}

        </div >

    );
};

