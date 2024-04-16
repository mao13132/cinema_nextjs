import styles from './CountUsers.module.css';
import cn from 'classnames';
import { CountUsersProps } from './CountUsers.props';

export const CountUsers = ({ className, ...props }: CountUsersProps): JSX.Element => {
    return (
        <div className={cn(className, styles['count-users'])} {...props}>

        </div>);
};
