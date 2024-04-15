import styles from './Auth.module.css';
import cn from 'classnames';
import { AuthProps } from "./Auth.props";
import { useAuthRedirect } from './useAuthRedirect';
import { useAuth } from '@/hooks/useAuth';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IAuthInput } from './iauthinput.interface';
import Head from 'next/head';
import { Heading } from '@/components/ui/Heading/Heading';
import { Button } from '@/components/ui/FormElements/Button/Button';
import { Filed } from '@/components/ui/FormElements/Field/Field';
import { AuthField } from '@/components/ui/FormElements/AuthField/AuthField';
import { useActions } from '@/hooks/useActions';

export const Auth = ({ }: AuthProps): JSX.Element => {

    useAuthRedirect();

    const { isLoading } = useAuth();

    const [type, setType] = useState<'login' | 'register'>('login')

    const { register: registerInput, handleSubmit, formState, reset } = useForm<IAuthInput>(
        {
            mode: 'onChange',
        }
    );

    const { login, register } = useActions();

    const onSubmit: SubmitHandler<IAuthInput> = (data) => {

        if (type === 'login') login(data);

        else if (type === 'register') register(data);

        reset();

    };

    return (
        <>
            <Head>
                <title>Авторизация</title>
            </Head>

            <section className={styles['wrapper']}>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <Heading title='Авторизация' className={styles['title']} />

                    <AuthField formState={formState} register={registerInput} isPasswordRequired />

                    <div className={styles['buttons']}>

                        <Button className={cn(styles['button-auth'], styles['button'])} type='submit' onClick={() => setType('login')} disabled={isLoading}>Вход</Button>

                        <Button className={cn(styles['button-reg'], styles['button'])} type='submit' onClick={() => setType('register')} disabled={isLoading}>Регистрация</Button>

                    </div>

                </form>

            </section>
        </>
    );
};