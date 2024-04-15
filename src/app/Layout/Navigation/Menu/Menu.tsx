import { MenuProps } from "./Menu.props";
import styles from './Menu.module.css'
import cn from 'classnames';
import { MenuItems } from "../MenuItem/MenuItem";
import { AuthItems } from "../MenuContainer/auth/AuthItems";

export const Menus = ({ className, menu: { items, title }, ...props }: MenuProps): JSX.Element => {
    return (
        <div {...props} className={cn(className, styles['menu'])}>
            <div className={styles['title']}>{title}</div>

            <ul className={styles['menu-ul']}>

                {items.map(item_ => (
                    <MenuItems className={styles['menu-item']} key={item_.link} icon={item_.icon} link={item_.link} title={item_.title} />
                ))}

                {title === 'Главная' ? <AuthItems className={styles['menu-item']} /> : null}

            </ul>

        </div>
    );
};