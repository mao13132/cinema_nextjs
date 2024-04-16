import styles from './Admin.module.css';
import cn from 'classnames';
import { AdminProps } from './Admin.props';
import Head from 'next/head';
import { Statistics } from '../Statistics/Statistics';
import { Heading } from '@/components/ui/Heading/Heading';
import { AdminNavigator } from '@/components/ui/AdminNavigator/AdminNavigator';

export const Admin = ({ className, ...props }: AdminProps): JSX.Element => {
    return (
        <div className={cn(className)} {...props}>
            <Head>
                <title>Админ панель</title>
            </Head>

            <AdminNavigator />


            <Heading title='Админка' className={styles['title']} />

            <Statistics />


        </div>);
};

