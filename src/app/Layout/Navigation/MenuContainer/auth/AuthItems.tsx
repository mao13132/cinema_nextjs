import { useAuth } from "@/hooks/useAuth";
import { AuthItemsProps } from "./AuthItems.props";
import { MenuItems } from "Layout/Navigation/MenuItem/MenuItem";
import { getAdminHomeUrl } from "@/config/url.config";
import { LogoutButton } from "./LogoutButton/LogoutButton";
import styles from './AuthItems.module.css';
import cn from 'classnames';

export const AuthItems = ({ className, ...props }: AuthItemsProps): JSX.Element => {
    const { user } = useAuth();

    return (
        <div {...props}>
            {user
                ? <>
                    <MenuItems icon="MdSettings" link='/profile' title='Профиль' className={cn(className)} />
                    <LogoutButton />
                </>
                : <>
                    <MenuItems icon="MdLogin" link='/auth' title='Войти' className={cn(className)} />
                </>}

            {user?.isAdmin && <MenuItems icon="MdOutlineLock" link={getAdminHomeUrl()} title='Админ панель' />}
        </div>
    );
};