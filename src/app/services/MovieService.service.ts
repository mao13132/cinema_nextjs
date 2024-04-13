import { getMoviesUrl } from '@/config/api.config';
import { getMovieUrl } from '@/config/url.config';
import { IMove } from '@/shared/types/movie.types';
import { axiosClassic } from 'api/interceptors';

export const MovieService = {
    async getAll(searchTerm?: string) {
        return axiosClassic.get<IMove[]>(getMovieUrl(``), {
            params: searchTerm ? { searchTerm } : {},
        })
    },
    async getPopularMovies() {
        const { data: movies } = await axiosClassic.get<IMove[]>('/popular');

        return movies
    },
};
