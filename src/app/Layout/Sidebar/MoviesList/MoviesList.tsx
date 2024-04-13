import { MoviesListProps } from './MoviesList.props';
import styles from './MoviesList.module.css';
import cn from 'classnames';
import { MoviesItem } from '../MoviesItem/MoviesItem';
import Link from 'next/link';

export const MoviesList = ({ link, title, movies, className, ...props }: MoviesListProps): JSX.Element => {

    return (
        <div className={cn(className, styles['movies-list'])} {...props}>

            <div className={cn(styles['heading'])}>
                {title}
            </div>

            {movies.map(movie => <MoviesItem key={movie._id} movie={movie} />)}

            <Link href={link} className={styles['button']}>
                Смотреть
            </Link>

        </div>
    ); 
};