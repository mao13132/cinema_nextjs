import styles from './MoviesEdit.module.css';
import adminForm from '../admin-from.module.css';
import cn from 'classnames';
import { Controller, useForm } from 'react-hook-form';
import { AdminNavigator } from '@/components/ui/AdminNavigator/AdminNavigator';
import Head from 'next/head';
import { SkeletonLoader } from '@/components/ui/Skeleton/SkeletonLoader';
import { Filed } from '@/components/ui/FormElements/Field/Field';
import { SlugField } from '@/components/ui/FormElements/SlugField/SlugField';
import generateSlug from '@/utils/generateSlug';
import { Button } from '@/components/ui/FormElements/Button/Button';
import { stripHtml } from 'string-strip-html';
import dynamic from 'next/dynamic';
import { IMoviesEditProps, MoviesEditProps2 } from './MoviesEdit.props';
import { useMovieEdit } from './useMovieEdit';


const DynamicTextEditor = dynamic(() => import('@/ui/FormElements/TextEditor/TextEditor'), {
    ssr: false,
})

export const MovieEdit = ({ className, ...props }: MoviesEditProps2): JSX.Element => {

    const { handleSubmit, register, formState: { errors }, setValue, getValues, control } = useForm<IMoviesEditProps>(
        {
            mode: 'onChange'
        }
    );

    const { isLoading, onSubmit } = useMovieEdit(setValue)

    return (
        <>
            <Head>
                <title>Редактирование фильма</title>
            </Head>

            <AdminNavigator />

            <form onSubmit={handleSubmit(onSubmit)}>

                {isLoading
                    ? <SkeletonLoader count={3} />
                    : <>

                        <div className={adminForm['form']}>

                            <Filed
                                {...register('title', { required: 'Название обязательно' })}
                                title='Название'
                                placeholder='Название'
                                errors={errors?.title?.message?.toString()}
                                className={adminForm['input']} />



                            <div className={adminForm['input']}>

                                <SlugField register={register} error={errors.slug} generate={() => { setValue('slug', generateSlug(getValues('title'))) }} />

                            </div>

                        </div>


                        <Button className={styles['button-form']}>Обновить</Button>
                    </>}

            </form>
        </>
    )
};
