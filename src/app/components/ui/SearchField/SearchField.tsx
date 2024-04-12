import { SearchFieldProps } from './SearchField.props';
import styles from './SearchField.module.css';
import cn from 'classnames';
import { MaterialIcon } from '../MaterialIcon/MaterialIcon';

export const SearchField = ({ searchTerm, handleSearch, className, ...props }: SearchFieldProps): JSX.Element => {
    return (
        <div className={cn(className, styles['search-field'])} {...props}>

            <MaterialIcon name='MdSearch' />

            <input placeholder='Поиск' value={searchTerm} onChange={handleSearch} />

        </div>
    );
};