import styles from './GenreEdit.module.css';
import adminForm from '../admin-from.module.css';
import cn from 'classnames';
import { GenreEditProps2, IGenreEditProps } from './GenreEdit.props';
import { Controller, useForm } from 'react-hook-form';
import { useGenreEdit } from './useGenreEdit';
import { AdminNavigator } from '@/components/ui/AdminNavigator/AdminNavigator';
import Head from 'next/head';
import { SkeletonLoader } from '@/components/ui/Skeleton/SkeletonLoader';
import { Filed } from '@/components/ui/FormElements/Field/Field';
import { SlugField } from '@/components/ui/FormElements/SlugField/SlugField';
import generateSlug from '@/utils/generateSlug';
import { Button } from '@/components/ui/FormElements/Button/Button';
import { stripHtml } from 'string-strip-html';
import dynamic from 'next/dynamic';


const DynamicTextEditor = dynamic(() => import('@/ui/FormElements/TextEditor/TextEditor'), {
    ssr: false,
})

export const GenreEdit = ({ className, ...props }: GenreEditProps2): JSX.Element => {

    const { handleSubmit, register, formState: { errors }, setValue, getValues, control } = useForm<IGenreEditProps>(
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

                        <div className={adminForm['form']}>

                            <Filed
                                {...register('name', { required: 'Имя обязательно' })}
                                title='Жанр'
                                placeholder='Жанр'
                                errors={errors?.name?.message?.toString()}
                                className={adminForm['input']} />



                            <div className={adminForm['input']}>

                                <SlugField register={register} error={errors.slug} generate={() => { setValue('slug', generateSlug(getValues('name'))) }} />

                            </div>

                            <Filed
                                {...register('icon', { required: 'Имя обязательно' })}
                                title='Icon'
                                placeholder='Icon'
                                errors={errors?.icon?.message?.toString()}
                                className={adminForm['input']} />

                        </div>

                        <Controller
                            control={control}
                            name='description'
                            defaultValue=''
                            render={
                                ({ field: { onChange, value }, fieldState: { error } }) => <DynamicTextEditor
                                    onChange={onChange}
                                    value={value}
                                    error={error}
                                    placeholder='Описание' />
                            }
                            rules={{
                                validate: {
                                    require: (v) => (v && stripHtml(v).result.length > 0) || 'Описание обязательно'
                                }
                            }}
                        />

                        <Button className={styles['button-form']}>Обновить</Button>
                    </>}

            </form>
        </>
    )
};
