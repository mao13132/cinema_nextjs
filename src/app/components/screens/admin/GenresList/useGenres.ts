import { useDebounce } from "@/hooks/useDebounce";
import { ChangeEvent, useMemo, useState } from "react";
import { useMutation, useQuery } from "react-query";

import { AdminTableProps } from '../../../ui/AdminTable/AdminTable/AdminTable.props';
import { getAdminUrl } from "@/config/url.config";
import { toastError } from "@/utils/toastError";
import { toastr } from "react-redux-toastr";
import { GenreService } from "@/services/genre.service";

export const useGenres = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const debouncedSearch = useDebounce(searchTerm, 500);

    const queryData = useQuery(['genres list', debouncedSearch], () => GenreService.getAllGenres(debouncedSearch), {
        select: ({ data }) => data.map((genres): AdminTableProps => ({
            id: genres._id,
            editUrl: getAdminUrl(`genres/edit/${genres._id}`),
            items: [genres.name, genres.slug],
        })),

        onError: (error) => {
            toastError(error, 'Genres list');
        },

    });


    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    };

    const { mutateAsync: deleteAsync } = useMutation('delete genres', (userId: string) => GenreService.deleteGenres(userId), {

        onError: (error) => {
            toastError(error, 'genres delete');
        },

        onSuccess: () => {
            toastr.success('Delete genres', 'delete is Okei')

            /* Обновление данных что бы пропал удалённый юзер */

            queryData.refetch();
        },

    });

    return useMemo(() => ({
        handleSearch, ...queryData, searchTerm, deleteAsync
    }), [queryData, searchTerm, deleteAsync]);

};
