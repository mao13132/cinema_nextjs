import { useDebounce } from "@/hooks/useDebounce";
import { ChangeEvent, useMemo, useState } from "react";
import { useMutation, useQuery } from "react-query";

import { AdminTableProps } from '../../../ui/AdminTable/AdminTable/AdminTable.props';
import { getAdminUrl } from "@/config/url.config";
import { toastError } from "@/utils/toastError";
import { toastr } from "react-redux-toastr";
import { GenreService } from "@/services/genre.service";
import { useRouter } from "next/router";
import { IGenre } from "@/shared/types/movie.types";

export const useGenres = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const debouncedSearch = useDebounce(searchTerm, 500);

    const { push } = useRouter();

    const queryData = useQuery(['genres list', debouncedSearch], () => GenreService.getAllGenres(debouncedSearch), {
        select: ({ data }) => data.map((genres): AdminTableProps => ({
            id: genres.id,
            editUrl: getAdminUrl(`genres/edit/${genres.id}`),
            items: [genres.name, genres.slug],
        })),

        onError: (error) => {
            toastError(error, 'Genres list');
        },

    });


    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    };

    const { mutateAsync: createAsync } = useMutation('create genres', () => GenreService.create(), {

        onError: (error) => {
            toastError(error, 'genres create');
        },

        onSuccess: ({ data }) => {

            toastr.success('Create genres', 'create is Okei')

            push(getAdminUrl(`genres/edit/${data.id}`));
        },

    });

    const { mutateAsync: deleteAsync } = useMutation('delete genres', (userId: string) => GenreService.deleteGenres(userId), {

        onError: (error) => {
            toastError(error, 'genres delete');
        },

        onSuccess: () => {
            toastr.success('Delete genres', 'delete is Okei')

            queryData.refetch();
        },

    });

    return useMemo(() => ({
        handleSearch, ...queryData, searchTerm, deleteAsync, createAsync
    }), [queryData, searchTerm, deleteAsync, createAsync]);

};
