import { getMovieUrl } from '@/config/url.config';
import { IMove } from '@/shared/types/movie.types';
import { axiosClassic } from 'api/interceptors';

export const MovieService = {
    async getAll(searchTerm?: string) {
        return axiosClassic.get<IMove[]>(getMovieUrl(``), {
            params: searchTerm ? { searchTerm } : {},
        })
    }
};
