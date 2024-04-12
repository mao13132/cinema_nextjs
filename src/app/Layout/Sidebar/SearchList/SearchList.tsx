import { SearchListProps } from './SearchList.props';
import styles from './SearchList.module.css';
import cn from 'classnames';
import Link from 'next/link';
import { getMovieUrl } from '@/config/url.config';
import Image from 'next/image';

export const SearchList = ({ movies, className, ...props }: SearchListProps): JSX.Element => {

    return (
        <div className={cn(className, styles['search-list'])} {...props}>

            {movies.length ? movies.map(movie => (
                <Link className={styles['a']} href={getMovieUrl(movie.slug)} key={movie._id}>

                    <Image className={styles['img']} src={movie.poster}
                        width={50}
                        height={50}
                        alt={movie.title}
                        objectFit='cover'
                        objectPosition='top'
                        draggable={false} />

                        <span className={styles['span']}>{movie.title}</span>

                </Link>
            )) : <div className={styles['not-found']}>Not Found...</div>}

        </div>
    );
};