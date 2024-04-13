import { MoviesFavoritesProps } from './MoviesFavorites.props';
import styles from './MoviesFavorites.module.css';
import cn from 'classnames';

export const MoviesFavorites = ({ className, ...props }: MoviesFavoritesProps): JSX.Element => {

    return (
        <div className={cn(className, styles['movies-popular'])} {...props}>

        </div>
    );
};