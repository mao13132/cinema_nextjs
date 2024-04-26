import { DescriptionProps } from "./Description.props";
import styles from './Description.module.css';
import cn from 'classnames';
import parse from 'html-react-parser';

export const Description = ({ text, className, ...props }: DescriptionProps): JSX.Element => {
    return (
        <div className={cn(className, styles['description'])} {...props}>

            <p>{parse(text)}</p>

        </div>
    );
};