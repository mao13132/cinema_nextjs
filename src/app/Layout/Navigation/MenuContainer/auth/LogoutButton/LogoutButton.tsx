import { useActions } from "@/hooks/useActions";
import { LogoutButtonProps } from "./LogoutButton.props";
import { MouseEvent } from 'react';
import { MaterialIcon } from "@/components/ui/MaterialIcon/MaterialIcon";
import styles from './LogoutButton.module.css';
import cn from 'classnames';

export const LogoutButton = ({ className, ...props }: LogoutButtonProps): JSX.Element => {

    const { logout } = useActions();

    const handleLogout = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        logout();
    };

    return (
        <li className={cn(className, styles['buttons'])}>
            <a onClick={handleLogout}>
                <MaterialIcon name='MdLogout' />
                <span>Выход</span>
            </a>
        </li>
    );
};