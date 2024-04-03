import { NavigationProps } from "./Navigation.props";
import styles from './Navigation.module.css';
import { Logo } from "./Logo/Logo";
import { MenuContainer } from "./MenuContainer/MenuContainer";
import cn from 'classnames';

export const Navigation = ({ className, ...props }: NavigationProps): JSX.Element => {
    return (
        <div {...props} className={cn(className, styles['nav'])}>
            <Logo />
            <MenuContainer />
            Navigator
        </div>
    );
};