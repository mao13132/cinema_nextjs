import styles from './GenreEdit.module.css';
import cn from 'classnames';
import { GenreEditProps2, IGenreEditProps } from './GenreEdit.props';
import { useForm } from 'react-hook-form';
import { useGenreEdit } from './useGenreEdit';
import { AdminNavigator } from '@/components/ui/AdminNavigator/AdminNavigator';
import Head from 'next/head';
import { SkeletonLoader } from '@/components/ui/Skeleton/SkeletonLoader';
import { Filed } from '@/components/ui/FormElements/Field/Field';
import { SlugField } from '@/components/ui/FormElements/SlugField/SlugField';
import generateSlug from '@/utils/generateSlug';

export const GenreEdit = ({ className, ...props }: GenreEditProps2): JSX.Element => {

    const { handleSubmit, register, formState: { errors }, setValue, getValues } = useForm<IGenreEditProps>(
        {
            mode: 'onChange'
        }
    );

    const { isLoading, onSubmit } = useGenreEdit(setValue)

    return (
        <>
            <Head>
                <title>Редактирование жанра</title>
            </Head>

            <AdminNavigator />

            <form onSubmit={handleSubmit(onSubmit)}>

                {isLoading
                    ? <SkeletonLoader count={3} />
                    : <>

                        <div className={styles['forms']}>

                            <Filed
                                {...register('name', { required: 'Имя обязательно' })}
                                title='Жанр'
                                placeholder='Жанр'
                                errors={errors?.name?.message?.toString()}
                                className={styles['input']} />



                            <div className={styles['input']}>

                                <SlugField register={register} error={errors.slug} generate={() => { setValue('slug', generateSlug(getValues('name'))) }} />

                            </div>

                            <Filed
                                {...register('icon', { required: 'Имя обязательно' })}
                                title='Icon'
                                placeholder='Icon'
                                errors={errors?.icon?.message?.toString()}
                                className={styles['input']} />

                        </div>

                    </>}

            </form>
        </>
    )
};
