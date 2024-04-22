import { SubmitHandler, UseFormSetValue } from "react-hook-form";
import { IMoviesEditProps } from './MoviesEdit.props';
import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";
import { toastError } from "@/utils/toastError";

import { getKeys } from '@/utils/getKeys';
import { toastr } from "react-redux-toastr";
import { getAdminUrl } from "@/config/url.config";
import { MovieService } from "@/services/MovieService.service";


export const useMovieEdit = (setValue: UseFormSetValue<IMoviesEditProps>) => {

    const { push, query } = useRouter();

    const movieId = String(query.id)

    const { isLoading } = useQuery(['get one movie', movieId], () => MovieService.getById(movieId), {
        onSuccess: ({ data }) => {

            data = data[0]

            getKeys(data).forEach((key) => { setValue(key, data[key]) });


        },

        onError(error) {
            toastError(error, 'Get movie')
        },

        enabled: !!query.id

    });

    const { mutateAsync } = useMutation('update movie', (data: IMoviesEditProps) => MovieService.update(movieId, data), {
        onError: (error) => {
            toastError(error, 'Update henre')
        },

        onSuccess() {
            toastr.success('Обновление фильма', 'Обновления успешно');

            push(getAdminUrl('movie'));
        },

    });

    const onSubmit: SubmitHandler<IMoviesEditProps> = async (data) => {
        await mutateAsync(data);
    }

    return { onSubmit, isLoading };

};