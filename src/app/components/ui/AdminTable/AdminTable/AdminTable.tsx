import { IAdminTable } from "./AdminTable.props";
import styles from './AdminTable.module.css';
import cn from 'classnames';
import { AdminTableHeader } from "./AdminTableHeader/AdminTableHeader";
import { SkeletonLoader } from "../../Skeleton/SkeletonLoader";
import { AdminTableItem } from "../AdminTableItem/AdminTableItem";


export const AdminTable = ({ headItems, isLoading, removeHandler, tableItems, className, ...props }: IAdminTable): JSX.Element => {
    return (
        <div className={cn(className, styles['table'])} {...props}>
            <AdminTableHeader className={styles['item']} headerItems={headItems} />

            {isLoading
                ? <SkeletonLoader count={1} height={48} className={styles['loader']} />
                : tableItems?.length
                    ? tableItems?.map(tableItem => <AdminTableItem
                        className={styles['item']}
                        key={tableItem.id}
                        removeHandler={() => removeHandler(tableItem.id)}
                        tableItem={tableItem} />) : <div>Не найдено</div>}
        </div>
    );
};


