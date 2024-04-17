import styles from './GenresList.module.css';
import cn from 'classnames';
import { GenresListProps } from './GenresList.props';
import Head from 'next/head';
import { AdminNavigator } from '@/components/ui/AdminNavigator/AdminNavigator';
import { Heading } from '@/components/ui/Heading/Heading';
import { AdminHeader } from '@/components/ui/AdminTable/AdminHeader/AdminHeader';
import { useGenres } from './useGenres';
import { AdminTable } from '@/components/ui/AdminTable/AdminTable/AdminTable';


export const GenresList = ({ className, ...props }: GenresListProps): JSX.Element => {

    const { handleSearch, isLoading, searchTerm, data, deleteAsync } = useGenres()

    return (<div className={cn(className)} {...props}>
        <Head>
            <title>Админ панель | Жанры кино</title>
        </Head>

        <AdminNavigator />


        <Heading title='Жанры' className={styles['title']} />

        <AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />

        <AdminTable isLoading={isLoading} removeHandler={deleteAsync} headItems={['Жанр', 'slug']} tableItems={data || []} />

    </div>
    );
};
