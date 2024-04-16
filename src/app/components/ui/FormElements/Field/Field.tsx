import { FieldProps } from "./Field.props";
import styles from './Field.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from "react";

export const Filed = forwardRef(({ title, errors, className, type = 'text', ...props }: FieldProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    return (
        <div className={cn(className, styles['commond'], styles['field'])} >

            <label>

                <span className={styles['span']}>{title}</span>

                <input className={cn(className, styles['input'])} type={type} ref={ref} {...props} />

            </label>

            {errors && <div className={styles['error']}>{errors}</div>}

        </div>
    );
});

Filed.displayName = 'Filed';
