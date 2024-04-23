import { GenreService } from "@/services/genre.service";
import { toastError } from "@/utils/toastError";
import { useQuery } from "react-query";
import { IOption } from '@/ui/Select/Select.props';

export const useAdminGenre = () => {
    const queryData = useQuery(
        'get genres in movie edit', () => GenreService.getAllGenres(), {
        select: ({ data }) =>
            data.map((genre): IOption => ({
                label: genre.name,
                value: genre.id,
            })),

        onError: (error) => {
            toastError(error, 'Ошибка получения жанров');
        }
    }
    );

    return queryData;
};