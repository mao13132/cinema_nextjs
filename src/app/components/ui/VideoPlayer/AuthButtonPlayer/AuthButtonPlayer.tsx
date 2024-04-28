import styles from './AuthButtonPlayer.module.css';
import cn from 'classnames';
import { AuthButtonPlayerProps } from './AuthButtonPlayer.props';
import Link from 'next/link';
import { getMovieUrl } from '@/config/url.config';

export const AuthButtonPlayer = ({ slug, className, ...props }: AuthButtonPlayerProps): JSX.Element => {


    return (
        <Link className={cn(className, styles['btn'])} href={`/auth?redirect=${getMovieUrl(slug)}`}>Войти</Link>

    );
};

