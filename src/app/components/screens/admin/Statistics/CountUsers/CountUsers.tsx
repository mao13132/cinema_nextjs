import styles from './CountUsers.module.css';
import cn from 'classnames';
import { CountUsersProps } from './CountUsers.props';
import { useQuery } from 'react-query';
import { AdminService } from '@/services/admin.service';
import { SkeletonLoader } from '@/components/ui/Skeleton/SkeletonLoader';

export const CountUsers = ({ className, ...props }: CountUsersProps): JSX.Element => {

    const { isLoading, data: response } = useQuery('count users', () => AdminService.getCountUsers())

    return (
        <div className={cn(className, styles['count-users'])} {...props}>

            <div>

                {isLoading ? <SkeletonLoader /> : <div className={styles['number']}>{response?.data?.count_users}</div>}

                <div className={styles['description']}>

                    пользователей

                </div>

            </div>

        </div>);
};
