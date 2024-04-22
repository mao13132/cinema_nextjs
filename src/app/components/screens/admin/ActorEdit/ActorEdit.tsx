import styles from './ActorEdit.module.css';
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
import { useActorEdit } from './useActorEdit';
import { ActorEditProps2, IActorEditProps } from './ActorEdit.props';
import { UploadFiled } from '@/components/ui/FormElements/UploadField/UploadField';


const DynamicTextEditor = dynamic(() => import('@/ui/FormElements/TextEditor/TextEditor'), {
    ssr: false,
})

export const ActorEdit = ({ className, ...props }: ActorEditProps2): JSX.Element => {

    const { handleSubmit, register, formState: { errors }, setValue, getValues, control } = useForm<IActorEditProps>(
        {
            mode: 'onChange'
        }
    );

    const { isLoading, onSubmit } = useActorEdit(setValue)

    return (
        <>
            <Head>
                <title>Редактирование актёра</title>
            </Head>

            <AdminNavigator />

            <form onSubmit={handleSubmit(onSubmit)}>

                {isLoading
                    ? <SkeletonLoader count={3} />
                    : <>

                        <div className={adminForm['form']}>

                            <Filed
                                {...register('name', { required: 'Имя обязательно' })}
                                title='Имя'
                                placeholder='Имя'
                                errors={errors?.name?.message?.toString()}
                                className={adminForm['input']} />



                            <div className={adminForm['input']}>

                                <SlugField register={register} error={errors.slug} generate={() => { setValue('slug', generateSlug(getValues('name'))) }} />

                            </div>

                        </div>

                        <Controller
                            control={control}
                            name='photo'
                            defaultValue=''
                            render={
                                ({ field: { onChange, value }, fieldState: { error } }) => (<UploadFiled
                                    onChange={onChange}
                                    value={`${process.env.NEXT_PUBLIC_DOMAIN}/${value}`}
                                    error={error}
                                    folder='actors'
                                    placeholder='Фото' />)
                            }
                            rules={{
                                required: 'Фото обязательно'
                            }}
                        />

                        <Button className={styles['button-form']}>Обновить</Button>
                    </>}

            </form>
        </>
    )
};
