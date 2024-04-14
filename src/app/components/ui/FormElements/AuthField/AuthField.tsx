import cn from 'classnames';
import styles from './AuthField.module.css';

import { AuthFieldProps } from "./AuthField.props";
import { Filed } from '../Field/Field';
import { EMAIL_REGEXP } from '@/shared/regex';
import { Inputs } from '../../Input/Input';



export const AuthField = ({ register, formState: { errors }, isPasswordRequired = false, ...props }: AuthFieldProps): JSX.Element => {
    return (
        <div className={cn(styles['auth-fields'])} {...props}>

            <Filed
                {...register('email', {
                    required: 'Поле E-mail обязательно к заполнению',
                    pattern: {
                        value: EMAIL_REGEXP,
                        message: 'Пожалуйста, введите корректный E-mail'
                    }
                })}
                title='E-mail'
                errors={errors?.email?.message?.toString()} />

            <Filed
                {...register('password', isPasswordRequired ? {
                    required: 'Поле пароль обязательно к заполнению',
                    minLength: {
                        value: 6,
                        message: 'Минимальная длина пароля 6 символов'
                    }
                } : {})}
                type='password'
                title='Пароль'
                errors={errors?.password?.message?.toString()} />

        </div>
    );
};