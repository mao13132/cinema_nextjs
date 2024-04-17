import styles from './UsersList.module.css';
import cn from 'classnames';
import { UsersListProps } from './UsersList.props';
import Head from 'next/head';
import { AdminNavigator } from '@/components/ui/AdminNavigator/AdminNavigator';
import { Heading } from '@/components/ui/Heading/Heading';
import { AdminHeader } from '@/components/ui/AdminTable/AdminHeader/AdminHeader';
import { useUsers } from './useUsers';
import { AdminTable } from '@/components/ui/AdminTable/AdminTable/AdminTable';


export const UsersList = ({ className, ...props }: UsersListProps): JSX.Element => {

    const { handleSearch, isLoading, searchTerm, data, deleteAsync } = useUsers()

    return (<div className={cn(className)} {...props}>
        <Head>
            <title>Админ панель | Список пользователей</title>
        </Head>

        <AdminNavigator />


        <Heading title='Пользователи' className={styles['title']} />

        <AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />

        <AdminTable isLoading={isLoading} removeHandler={deleteAsync} headItems={['Email', 'Дата регистрация']} tableItems={data || []} />

    </div>
    );
};
