import { SubmitHandler, UseFormSetValue } from "react-hook-form";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";
import { toastError } from "@/utils/toastError";

import { getKeys, getKeys3 } from '@/utils/getKeys';
import { toastr } from "react-redux-toastr";
import { getAdminUrl } from "@/config/url.config";
import { IActorEditProps } from "./ActorEdit.props";
import { AvtorsService } from "@/services/actors.service";
import { IActor } from "@/shared/types/movie.types";


export const useActorEdit = (setValue: UseFormSetValue<IActorEditProps>) => {

    const { push, query } = useRouter();

    const actorId = String(query.id)

    const { isLoading } = useQuery(['get one actor', actorId], () => AvtorsService.getByIds(actorId), {

        onSuccess: ({ data }) => {

            getKeys3(data[0]).forEach((key) => { setValue((key), data[0][key]) });


        },

        onError(error) {
            debugger
            toastError(error, 'Get actor')
        },

        enabled: !!query.id

    });

    const { mutateAsync } = useMutation('update actor', (data: IActorEditProps) => AvtorsService.update(actorId, data), {
        onError: (error) => {
            toastError(error, 'Update henre')
        },

        onSuccess() {
            toastr.success('Обновление актёра', 'Обновления успешно');

            push(getAdminUrl('actors'));
        },

    });

    const onSubmit: SubmitHandler<IActorEditProps> = async (data) => {
        await mutateAsync(data);
    }

    return { onSubmit, isLoading };

};