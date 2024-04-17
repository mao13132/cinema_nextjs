import { useDebounce } from "@/hooks/useDebounce";
import { UsersService } from "@/services/users.service";
import { ChangeEvent, useMemo, useState } from "react";
import { useMutation, useQuery } from "react-query";

import { AdminTableProps } from '../../../ui/AdminTable/AdminTable/AdminTable.props';
import { getAdminUrl } from "@/config/url.config";
import { converDate } from "@/utils/date/converDate";
import { toastError } from "@/utils/toastError";
import { toastr } from "react-redux-toastr";

export const useUsers = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const debouncedSearch = useDebounce(searchTerm, 500);

    const queryData = useQuery(['user list', debouncedSearch], () => UsersService.getAll(debouncedSearch), {
        select: ({ data }) => data.map((user): AdminTableProps => ({
            id: user.id,
            editUrl: getAdminUrl(`user/edit/${user.id}`),
            items: [user.email, converDate(user.createdAt)],
        })),

        onError: (error) => {
            toastError(error, 'User list');
        },

    });


    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    };

    const { mutateAsync: deleteAsync } = useMutation('delete user', (userId: string) => UsersService.deleteUser(userId), {

        onError: (error) => {
            toastError(error, 'User delete');
        },

        onSuccess: () => {
            toastr.success('Delete user', 'delete is Okei')

            /* Обновление данных что бы пропал удалённый юзер */

            queryData.refetch();
        },

    });

    return useMemo(() => ({
        handleSearch, ...queryData, searchTerm, deleteAsync
    }), [queryData, searchTerm, deleteAsync]);

};
