import styles from './Statistics.module.css';
import cn from 'classnames';
import { StatisticsProps } from './Statistics.props';
import { CountUsers } from './CountUsers/CountUsers';
import { PopularMovie } from './PopularMovie/PopularMovie';

export const Statistics = ({ className, ...props }: StatisticsProps): JSX.Element => {
    return (
        <div className={cn(className, styles['statistics'])} {...props}>
            <CountUsers className={styles['block']} />
            <PopularMovie className={styles['block']} />
        </div>);
};
