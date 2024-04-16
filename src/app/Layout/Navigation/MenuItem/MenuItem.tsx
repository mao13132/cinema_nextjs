import { IMenuItems, MenuItemProps } from "./MenuItem.props";
import cn from 'classnames';
import styles from './MenuItem.module.css';
import { useRouter } from "next/router";
import Link from "next/link";
import { MaterialIcon } from "@/ui/MaterialIcon/MaterialIcon";

export const MenuItems = ({ icon, link, title, className, ...props }: MenuItemProps & IMenuItems): JSX.Element => {

    const { asPath } = useRouter();

    return (
        <li {...props} className={cn(className, styles['menu-row'],
            {
                [styles['active']]: asPath === link
            }
        )}>

            <Link href={link}>
                <MaterialIcon name={icon} />
                <span>{title}</span>
            </Link>
        </li>
    );
};