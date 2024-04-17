import { AdminTableHeaderProps } from "./AdminTableHeader.props";
import styles from './AdminTableHeader.module.css';
import cn from 'classnames';

export const AdminTableHeader = ({ headerItems, className, ...props }: AdminTableHeaderProps): JSX.Element => {
    return (
        <div className={cn(className, styles['table-header'])} {...props}>

            {headerItems?.map(value => <div key={value}>{value}</div>)}

            <div>Actions</div>

        </div>
    );
};


