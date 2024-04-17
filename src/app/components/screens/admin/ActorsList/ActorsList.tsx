import styles from './ActorsList.module.css';
import cn from 'classnames';
import { ActorsListProps } from './ActorsList.props';
import Head from 'next/head';
import { AdminNavigator } from '@/components/ui/AdminNavigator/AdminNavigator';
import { Heading } from '@/components/ui/Heading/Heading';
import { AdminHeader } from '@/components/ui/AdminTable/AdminHeader/AdminHeader';
import { useActors } from './useActors';
import { AdminTable } from '@/components/ui/AdminTable/AdminTable/AdminTable';


export const ActorsList = ({ className, ...props }: ActorsListProps): JSX.Element => {

    const { handleSearch, isLoading, searchTerm, data, deleteAsync } = useActors()

    return (<div className={cn(className)} {...props}>
        <Head>
            <title>Админ панель | Список актёров</title>
        </Head>

        <AdminNavigator />


        <Heading title='Актёр' className={styles['title']} />

        <AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />

        <AdminTable isLoading={isLoading} removeHandler={deleteAsync} headItems={['Актёр', 'Кол-во фильмов']} tableItems={data || []} />

    </div>
    );
};
