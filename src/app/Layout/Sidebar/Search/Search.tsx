import { SeacrProps } from './Search.props';
import styles from './Search.module.css';
import cn from 'classnames';
import { SearchList } from '../SearchList/SearchList';
import { useSeacrh } from './useSearch/useSearch';
import { SearchField } from '@/ui/SearchField/SearchField';

export const Seacrh = ({ className, ...props }: SeacrProps): JSX.Element => {

    const { isSuccess, handleSearch, data, searchTerm } = useSeacrh();

    return (
        <div className={cn(className, styles['wrapper'])} {...props}>

            <SearchField searchTerm={searchTerm} handleSearch={handleSearch} />

            {isSuccess && <SearchList movies={data || []} />}

        </div>
    );
};