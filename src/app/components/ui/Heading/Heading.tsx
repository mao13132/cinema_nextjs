import { HeadingProps } from "./Heading.props";
import styles from './Heading.module.css';
import cn from 'classnames';

export const Heading = ({ title, className, ...props }: HeadingProps): JSX.Element => {
    return (
        <h1 className={cn(className, styles['h1'])} {...props}>{title}</h1>
    );
};