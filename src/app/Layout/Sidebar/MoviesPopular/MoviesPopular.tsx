import { MoviesPopularProps } from './MoviesPopular.props';
import styles from './MoviesPopular.module.css';
import cn from 'classnames';
import { useQuery } from 'react-query';
import { MovieService } from '@/services/MovieService.service';
import { SkeletonLoader } from '@/components/ui/Skeleton/SkeletonLoader';
import { MoviesList } from '../MoviesList/MoviesList';
import { IMove } from '@/shared/types/movie.types';

export const MoviesPopular = ({ className, ...props }: MoviesPopularProps): JSX.Element => {

    const { isLoading, data: popularMovies } = useQuery('Popular Movie in sidebar', () => MovieService.getPopularMovies(), {

        select: (data): IMove[] => data.filter(_move => _move.poster),
    })

    return isLoading
        ? <div className={cn(styles['loading'])}><SkeletonLoader count={3} className={cn(styles['skeleton'])} /></div>
        : <MoviesList link='/trending' movies={popularMovies || []} title='Популярные фильмы' />;
};