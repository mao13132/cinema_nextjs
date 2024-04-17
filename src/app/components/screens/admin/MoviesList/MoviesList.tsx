import styles from './MoviesList.module.css';
import cn from 'classnames';
import { MoviesListProps } from './MoviesList.props';
import Head from 'next/head';
import { AdminNavigator } from '@/components/ui/AdminNavigator/AdminNavigator';
import { Heading } from '@/components/ui/Heading/Heading';
import { AdminHeader } from '@/components/ui/AdminTable/AdminHeader/AdminHeader';
import { useMovies } from './useMovies';
import { AdminTable } from '@/components/ui/AdminTable/AdminTable/AdminTable';


export const MoviesList = ({ className, ...props }: MoviesListProps): JSX.Element => {

    const { handleSearch, isLoading, searchTerm, data, deleteAsync } = useMovies()

    return (<div className={cn(className)} {...props}>
        <Head>
            <title>Админ панель | Список фильмов</title>
        </Head>

        <AdminNavigator />


        <Heading title='Фильмы' className={styles['title']} />

        <AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />

        <AdminTable isLoading={isLoading} removeHandler={deleteAsync} headItems={['Фильм', 'Жанр', 'Рейтинг']} tableItems={data || []} />

    </div>
    );
};
