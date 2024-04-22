import { useDebounce } from "@/hooks/useDebounce";
import { ChangeEvent, useMemo, useState } from "react";
import { useMutation, useQuery } from "react-query";

import { AdminTableProps } from '../../../ui/AdminTable/AdminTable/AdminTable.props';
import { getAdminUrl } from "@/config/url.config";
import { toastError } from "@/utils/toastError";
import { toastr } from "react-redux-toastr";
import { AvtorsService } from "@/services/actors.service";
import { useRouter } from "next/router";

export const useActors = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const debouncedSearch = useDebounce(searchTerm, 500);

    const queryData = useQuery(['actors list', debouncedSearch], () => AvtorsService.getAllActors(debouncedSearch), {
        select: ({ data }) => data.map((actor): AdminTableProps => ({
            id: actor.id,
            editUrl: getAdminUrl(`actors/edit/${actor.id}`),
            items: [actor.name, String(actor.countMovies)],
        })),

        onError: (error) => {
            toastError(error, 'Actors list');
        },

    });


    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    };

    const { push } = useRouter();

    const { mutateAsync: createAsync } = useMutation('create actor', () => AvtorsService.create(), {

        onError: (error) => {
            toastError(error, 'Actor create');
        },

        onSuccess: ({ data }) => {

            toastr.success('Create actor', 'create is Okei')

            push(getAdminUrl(`actors/edit/${data.id}`));
        },

    });

    const { mutateAsync: deleteAsync } = useMutation('delete actor', (actorsId: string) => AvtorsService.deleteActors(actorsId), {

        onError: (error) => {
            toastError(error, 'Actor delete');
        },

        onSuccess: () => {
            toastr.success('Delete actor', 'delete is Okei')

            /* Обновление данных что бы пропал удалённый юзер */

            queryData.refetch();
        },

    });

    return useMemo(() => ({
        handleSearch, ...queryData, searchTerm, deleteAsync, createAsync
    }), [queryData, searchTerm, deleteAsync, createAsync]);

};
