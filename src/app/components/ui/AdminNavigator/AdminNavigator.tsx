import styles from './AdminNavigator.module.css';
import cn from 'classnames';
import { AdminNavigatorProps } from './AdminNavigator.props';
import { navItems } from './AdminNavigator.data';
import { AdminNavItem } from './AdminNavItem/AdminNavItem';

export const AdminNavigator = ({ className, ...props }: AdminNavigatorProps): JSX.Element => {
    return (
        <nav className={cn(className, styles['admin-navigator'])} {...props}>
            <ul>
                {navItems.map(item => <AdminNavItem className={styles['item']} key={item.link} link={item.link} title={item.title} />)}
            </ul>
        </nav>);
};
 