import styles from './AdminNavItem.module.css';
import cn from 'classnames';
import { AdminNavItemProps } from './AdminNavItem.props';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const AdminNavItem = ({ link, title, className, ...props }: AdminNavItemProps): JSX.Element => {

    const { asPath } = useRouter();

    return (
        <li className={cn(className, styles['nav-item'])} {...props}>
            <Link href={link} className={cn({
                [styles['active']]: asPath === link,
            })}>
                {title}
            </Link>
        </li>
    );
};
