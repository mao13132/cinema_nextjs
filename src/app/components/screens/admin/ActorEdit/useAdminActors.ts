import { toastError } from "@/utils/toastError";
import { useQuery } from "react-query";
import { IOption } from '@/ui/Select/Select.props';
import { AvtorsService } from "@/services/actors.service";

export const useAdminActors = () => {
    const queryData = useQuery(
        'get actors in movie edit', () => AvtorsService.getAllActors(), {
        select: ({ data }) =>
            data.map((actors): IOption => ({
                label: actors.name,
                value: actors.id,
            }))
        ,

        onError: (error) => {
            toastError(error, 'Ошибка получения актёров');
        }
    }
    );

    return queryData;
};