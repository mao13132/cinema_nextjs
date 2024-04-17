import { useDebounce } from "@/hooks/useDebounce";
import { UsersService } from "@/services/users.service";
import { ChangeEvent, useMemo, useState } from "react";
import { useMutation, useQuery } from "react-query";

import { AdminTableProps } from '../../../ui/AdminTable/AdminTable/AdminTable.props';
import { getAdminUrl } from "@/config/url.config";
import { toastError } from "@/utils/toastError";
import { toastr } from "react-redux-toastr";
import { MovieService } from "@/services/MovieService.service";
import { getGenresList } from "@/utils/movie/getGenresList";

export const useMovies = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const debouncedSearch = useDebounce(searchTerm, 500);

    const queryData = useQuery(['Movie list', debouncedSearch], () => MovieService.getAll(debouncedSearch), {
        select: ({ data }) => data.map((movie): AdminTableProps => ({
            id: movie._id,
            editUrl: getAdminUrl(`movie/edit/${movie._id}`),
            items: [movie.title, getGenresList(movie.genres), String(movie.rating)],
        })),

        onError: (error) => {
            toastError(error, 'Movies list');
        },

    });


    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    };

    const { mutateAsync: deleteAsync } = useMutation('delete user', (userId: string) => MovieService.deleteMovie(userId), {

        onError: (error) => {
            toastError(error, 'Movie delete');
        },

        onSuccess: () => {
            toastr.success('Delete movies', 'delete is Okei')

            /* Обновление данных что бы пропал удалённый юзер */

            queryData.refetch();
        },

    });

    return useMemo(() => ({
        handleSearch, ...queryData, searchTerm, deleteAsync
    }), [queryData, searchTerm, deleteAsync]);

};
