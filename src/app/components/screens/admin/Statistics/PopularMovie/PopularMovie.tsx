import styles from './PopularMovie.module.css';
import cn from 'classnames';
import { PopularMovieProps } from './PopularMovie.props';

export const PopularMovie = ({ className, ...props }: PopularMovieProps): JSX.Element => {
    return (
        <div className={cn(className, styles['popular-movie'])} {...props}>

        </div>);
};
