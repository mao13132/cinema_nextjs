import { useAuth } from "@/hooks/useAuth";
import { AuthItemsProps } from "./AuthItems.props";
import { MenuItems } from "Layout/Navigation/MenuItem/MenuItem";
import { getAdminHomeUrl } from "@/config/url.config";
import { LogoutButton } from "./LogoutButton/LogoutButton";
import styles from './AuthItems.module.css';
import cn from 'classnames';

export const AuthItems = ({ className, ...props }: AuthItemsProps): JSX.Element => {
    const { user } = useAuth();

    return (<MenuItems icon="MdOutlineLock" className={cn(className)} link={getAdminHomeUrl()} title='Админ панель' />);
        {/* <>
            {user ? <>
                    <MenuItems icon="MdSettings" link='/profile' title='Профиль' className={cn(className)} />
                    <MenuItems icon="MdOutlineLock" className={cn(className)} link={getAdminHomeUrl()} title='Админ панель' />
                    <LogoutButton className={cn(className)} />
                </>
                : <>
                    <MenuItems icon="MdLogin" link='/auth' title='Войти' className={cn(className)} />
                </>}

            {user && <MenuItems icon="MdOutlineLock" className={cn(className)} link={getAdminHomeUrl()} title='Админ панель' />}
        </> */}
};