import { SubmitHandler, UseFormSetValue } from "react-hook-form";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";
import { toastError } from "@/utils/toastError";

import { getKeys } from '@/utils/getKeys';
import { toastr } from "react-redux-toastr";
import { getAdminUrl } from "@/config/url.config";
import { IActorEditProps } from "./ActorEdit.props";
import { AvtorsService } from "@/services/actors.service";


export const useActorEdit = (setValue: UseFormSetValue<IActorEditProps>) => {

    const { push, query } = useRouter();

    const actorId = String(query.id)

    const { isLoading } = useQuery(['get one actor', actorId], () => AvtorsService.getById(actorId), {
        onSuccess: ({ data }) => {

            data = data[0]

            getKeys(data).forEach((key) => { setValue(key, data[key]) });


        },

        onError(error) {
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