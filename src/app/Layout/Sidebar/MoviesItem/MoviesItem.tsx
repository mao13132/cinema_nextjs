import Link from 'next/link';
import { MoviesItemProps } from './MoviesItem.props';
import styles from './MoviesItem.module.css';
import cn from 'classnames';
import { getMovieUrl } from '@/config/url.config';
import Image from 'next/image';
import { getGenreUrl } from '@/config/url.config';
import { getGenresListEach } from '@/utils/movie/getGenresList';
import { MaterialIcon } from '@/components/ui/MaterialIcon/MaterialIcon';

export const MoviesItem = ({ movie, className, ...props }: MoviesItemProps): JSX.Element => {

    return (
        <div className={cn(className, styles['item'])} {...props}>

            <Link href={getMovieUrl(movie.slug)}>

                <div className={styles['image-contaner']}>
                    {movie.poster && <Image
                        draggable={false}
                        sizes="100%"
                        alt={movie.title}
                        src={movie.poster}
                        fill
                        className={styles['image']}
                        priority />}
                </div>

            </Link>

            <div className={styles['info']}>
                <div className={styles['title']}>
                    {movie.title}
                </div>

                <div className={styles['genres']}>

                    {movie.genres.map((genre, idx) => <Link key={idx} href={getGenreUrl(genre.slug)}>
                        {getGenresListEach(idx, movie.genres.length, genre.name)}
                    </Link>)}

                </div>

                <div className={styles['rating']}>
                    <MaterialIcon name='MdStarRate' />
                    <span>{movie.rating?.toFixed(1)}</span>
                </div>

            </div>

        </div>
    );
};