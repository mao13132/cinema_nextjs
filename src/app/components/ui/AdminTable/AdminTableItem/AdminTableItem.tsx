import { AdminTableItemProps } from "./AdminTableItem.props";
import styles from './AdminTableItem.module.css';
import cn from 'classnames';
import { AdminActions } from "../AdminTable/AdminActions/AdminActions";

export const AdminTableItem = ({ removeHandler, tableItem, className, ...props }: AdminTableItemProps): JSX.Element => {
    return (
        <div className={cn(className, styles['item'])} {...props}>

            {tableItem.items.map(value => <div key={value}>{value}</div>)}

            <AdminActions editUrl={tableItem.editUrl} revomeHandler={removeHandler} />

        </div>
    );
};


