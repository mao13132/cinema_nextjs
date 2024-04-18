import { SubmitHandler, UseFormSetValue } from "react-hook-form";
import { IGenreEditProps } from './GenreEdit.props';
import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";
import { GenreService } from "@/services/genre.service";
import { toastError } from "@/utils/toastError";

import { getKeys } from '@/utils/getKeys';
import { useMemo } from "react";
import { toastr } from "react-redux-toastr";
import { getAdminUrl } from "@/config/url.config";


export const useGenreEdit = (setValue: UseFormSetValue<IGenreEditProps>) => {

    const { push, query } = useRouter();

    const genreId = String(query.id)

    const { isLoading } = useQuery(['get one genre', genreId], () => GenreService.getById(genreId), {
        onSuccess: ({ data }) => {

            data = data[0]

            getKeys(data).forEach((key) => { setValue(key, data[key]) });


        },

        onError(error) {
            toastError(error, 'Get genre')
        },

        enabled: !!query.id

    });

    const { mutateAsync } = useMutation('update genre', (data: IGenreEditProps) => GenreService.update(genreId, data), {
        onError: (error) => {
            toastError(error, 'Update henre')
        },

        onSuccess() {
            toastr.success('Обновление жанра', 'Обновления успешно');

            push(getAdminUrl('genres'));
        },

    });

    const onSubmit: SubmitHandler<IGenreEditProps> = async (data) => {
        await mutateAsync(data);
    }

    return { onSubmit, isLoading };

};