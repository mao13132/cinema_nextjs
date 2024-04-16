import styles from './PopularMovie.module.css';
import cn from 'classnames';
import { PopularMovieProps } from './PopularMovie.props';
import { useQuery } from 'react-query';
import { MovieService } from '@/services/MovieService.service';
import { IMove } from '@/shared/types/movie.types';
import { SubHeading } from '@/components/ui/SubHeading/SubHeading';
import { SkeletonLoader } from '@/components/ui/Skeleton/SkeletonLoader';
import Link from 'next/link';
import { getMovieUrl } from '@/config/url.config';
import Image from 'next/image';

export const PopularMovie = ({ className, ...props }: PopularMovieProps): JSX.Element => {

    const { isLoading, data: movie } = useQuery('Most popular movie in admin', () => MovieService.getPopularMovies(), {

        select: (data): IMove => data[0],

    })


    return (
        <div className={cn(className, styles['popular-movie'])} {...props}>
            <SubHeading className={styles['title']} title='Самый популярный фильм' />

            {
                isLoading
                    ? <SkeletonLoader className={styles['sceleton']} />
                    : movie && <>
                        <h3 className={styles['h3']}>{movie.title}</h3>
                        <Link href={getMovieUrl(movie.slug)}>
                            <Image
                                width={285}
                                height={176}
                                src={movie.bigPoster}
                                alt={movie.title}
                                className={styles['image']}
                                unoptimized
                            />
                        </Link>
                    </>
            }

        </div>);
};
