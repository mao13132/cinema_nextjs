import { Menus } from '../Menu/Menu';
import styles from './MenuContainer.module.css';
import { MenuContainerProps } from './MenuContainer.props';
import { GenerMenu } from './genres/GenerMenu/GenerMenu';
import { firstMenu, userMenu } from './menu.data';

export const MenuContainer = ({ ...props }: MenuContainerProps): JSX.Element => {
    return (
        <div {...props}>
            <Menus menu={firstMenu} />
            <GenerMenu />
            <Menus menu={userMenu} />
        </div>
    );
};
