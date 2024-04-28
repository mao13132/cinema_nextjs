import styles from './AuthPlaceholderPlayer.module.css';
import cn from 'classnames';
import { AuthPlaceholderPlayerProps } from './AuthPlaceholderPlayer.props';
import { AuthButtonPlayer } from '../AuthButtonPlayer/AuthButtonPlayer';

export const AuthPlaceholderPlayer = ({ slug, className, ...props }: AuthPlaceholderPlayerProps): JSX.Element => {


    return (
        <div className={cn(styles['placeholder'], className)} {...props} >

            <div>Авторизуйтесь что бы смотреть видео</div>

            <AuthButtonPlayer className={styles['btn']} slug={slug} />

        </div >

    );
};

