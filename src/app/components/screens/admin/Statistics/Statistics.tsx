import styles from './Statistics.module.css';
import cn from 'classnames';
import { StatisticsProps } from './Statistics.props';

export const Statistics = ({ className, ...props }: StatisticsProps): JSX.Element => {
    return (
        <div className={cn(className, styles['statistics'])} {...props}>

        </div>);
};
