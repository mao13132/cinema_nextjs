import { SubHeadingProps } from "./SubHeading.props";
import styles from './SubHeading.module.css';
import cn from 'classnames';

export const SubHeading = ({ title, className, ...props }: SubHeadingProps): JSX.Element => {
    return (
        <h2 className={cn(className, styles['h2'])} {...props}>{title}</h2>
    );
};