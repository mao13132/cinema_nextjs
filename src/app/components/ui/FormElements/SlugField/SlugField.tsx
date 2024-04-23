import { SlugFieldProps } from "./SlugField.props";
import styles from './SlugField.module.css';
import cn from 'classnames';
import classNames from "classnames/bind";
import { Filed } from "../Field/Field";

export const SlugField = ({ generate, register, error, className, ...props }: SlugFieldProps): JSX.Element => {
    return (
        <div className={cn(classNames, styles['slugfield'])} {...props} >


            <Filed
                {...register('slug', { required: 'Slug обязательное поле' })}
                title='Slug'
                placeholder='Slig'
                errors={error?.message?.toString()}
                className={styles['input']} />

            <div className={styles['badge']} onClick={generate}>
                Генерация
            </div>

        </div>
    );
};

