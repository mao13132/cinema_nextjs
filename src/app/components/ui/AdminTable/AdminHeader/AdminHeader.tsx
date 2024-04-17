import { AdminHeaderProps } from "./AdminHeader.props";
import styles from './AdminHeader.module.css';
import cn from 'classnames';
import { SearchField } from "../../SearchField/SearchField";
import { AdminCreateButton } from "../AdminCreateButton/AdminCreateButton";

export const AdminHeader = ({ myClick, handleSearch, searchTerm, className, ...props }: AdminHeaderProps): JSX.Element => {
    return (
        <div className={cn(className, styles['header'])} {...props}>
            <SearchField searchTerm={searchTerm} handleSearch={handleSearch} />

            {myClick && <AdminCreateButton className={styles['button']} onClick={myClick} />}
        </div>
    );
};


