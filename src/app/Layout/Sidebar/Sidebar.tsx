import { SidebarProps } from "./Sidebar.props";
import styles from './Sidebar.module.css';
import { Seacrh } from "./Search/Search";
import cn from 'classnames';

export const Sidebar = ({  className, ...props }: SidebarProps): JSX.Element => {
    return (
        <div className={cn(className, styles['sidebar'])} {...props}>

            <Seacrh />
        
        </div>
    );
};