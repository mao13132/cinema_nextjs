import { MoviesFavoritesNotAuthProps } from './MoviesFavoritesNotAuth.props';
import styles from './MoviesFavoritesNotAuth.module.css';
import cn from 'classnames';

export const MoviesFavoritesNotAuth = ({ className, ...props }: MoviesFavoritesNotAuthProps): JSX.Element => {

    return (
        <div className={cn(className, styles['movies-no-auth'])} {...props}>
            Для просмотра нужна авторизация...
        </div>
    );
};