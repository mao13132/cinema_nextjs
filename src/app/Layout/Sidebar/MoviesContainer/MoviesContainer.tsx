import { MoviesContainerProps } from './MoviesContainer.props';
import styles from './MoviesContainer.module.css';
import cn from 'classnames';
import { MoviesPopular } from '../MoviesPopular/MoviesPopular';
import { MoviesFavorites } from '../MoviesFavorites/MoviesFavorites';

export const MoviesContainer = ({ className, ...props }: MoviesContainerProps): JSX.Element => {

    return (
        <div className={cn(className, styles['movies-container'])} {...props}>

            <MoviesPopular />

            <MoviesFavorites />

        </div>
    );
};