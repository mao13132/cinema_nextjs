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
import { IMoviesEditProps, MoviesEditProps2 } from './MoviesEdit.props';
import { useMovieEdit } from './useMovieEdit';
import { UploadFiled } from '@/components/ui/FormElements/UploadField/UploadField';
import { useAdminGenre } from './useAdminGenre';
import { useAdminActors } from '../ActorEdit/useAdminActors';
import dynamic from 'next/dynamic';

const DynamicSelect = dynamic(() => import('@/ui/Select/Select'), {
    ssr: false,
});


export const MovieEdit = ({ className, ...props }: MoviesEditProps2): JSX.Element => {

    const { handleSubmit, register, formState: { errors }, setValue, getValues, control } = useForm<IMoviesEditProps>(
        {
            mode: 'onChange'
        }
    );

    const { isLoading, onSubmit } = useMovieEdit(setValue)

    const { isLoading: isGenresLoading, data: genresData } = useAdminGenre();

    const { isLoading: isActorsLoading, data: actorsData } = useAdminActors();

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

                        <div className={styles['param-row']}>

                            <Filed
                                {...register('parameters.country', { required: 'Страна обязательно' })}
                                title='Страна'
                                placeholder='Страна'
                                errors={errors?.parameters?.country?.message?.toString()}
                                className={adminForm['input']} />

                            <Filed
                                {...register('parameters.duration', { required: 'Продолжительность обязательна' })}
                                title='Продолжительность'
                                placeholder='Продолжительность'
                                errors={errors?.parameters?.duration?.message?.toString()}
                                className={adminForm['input']} />

                            <Filed
                                {...register('parameters.year', { required: 'Год обязателен' })}
                                title='Год'
                                placeholder='Год'
                                errors={errors?.parameters?.year?.message?.toString()}
                                className={adminForm['input']} />



                        </div>

                        <div className={styles['select-row']}>

                            <Controller
                                control={control}
                                name='genres'
                                render={
                                    ({ field, fieldState: { error } }) => (<DynamicSelect
                                        field={field}
                                        options={genresData || []}
                                        isLoading={isGenresLoading}
                                        isMulti
                                        placeholder='Жанры'
                                        errors={error?.message}

                                    />)
                                }
                                rules={{
                                    required: 'Укажите хотя бы 1 жанр'
                                }}
                            />

                            <Controller
                                control={control}
                                name='actors'
                                render={
                                    ({ field, fieldState: { error } }) => (<DynamicSelect
                                        field={field}
                                        options={actorsData || []}
                                        isLoading={isActorsLoading}
                                        isMulti
                                        placeholder='Актёры'
                                        errors={error?.message}

                                    />)
                                }
                                rules={{
                                    required: 'Укажите хотя бы 1 актёра'
                                }}
                            />

                        </div>

                        <div className={styles['image-row']}>

                            <Controller
                                control={control}
                                name='poster'
                                defaultValue=''
                                render={
                                    ({ field: { onChange, value }, fieldState: { error } }) => (<UploadFiled
                                        onChange={onChange}
                                        value={`${process.env.NEXT_PUBLIC_DOMAIN}/${value}`}
                                        error={error}
                                        folder='poster'
                                        placeholder='Постер' />)
                                }
                                rules={{
                                    required: 'Постер обязателен'
                                }}
                            />

                            <Controller
                                control={control}
                                name='bigPoster'
                                defaultValue=''
                                render={
                                    ({ field: { onChange, value }, fieldState: { error } }) => (<UploadFiled
                                        onChange={onChange}
                                        value={`${process.env.NEXT_PUBLIC_DOMAIN}/${value}`}
                                        error={error}
                                        folder='poster'
                                        placeholder='Большой постер' />)
                                }
                                rules={{
                                    required: 'Большой постер обязателен'
                                }}
                            />


                        </div>

                        <div className={styles['video-row']}>
                            <Controller
                                control={control}
                                name='videoUrl'
                                defaultValue=''
                                render={
                                    ({ field: { onChange, value }, fieldState: { error } }) => (<UploadFiled
                                        onChange={onChange}
                                        value={`${process.env.NEXT_PUBLIC_DOMAIN}/${value}`}
                                        error={error}
                                        folder='video'
                                        placeholder='Видео'
                                        isNoImage />)
                                }
                            /* rules={{
                                required: 'Большой постер обязателен'
                            }} */
                            />
                        </div>

                        <Button className={styles['button-form']}>Обновить</Button>
                    </>}

            </form>
        </>
    )
};
