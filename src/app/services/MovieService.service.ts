import { IMoviesEditProps } from '@/components/screens/admin/MoviesList/MoviesList.props';
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

    async create() {
        return axiosClassic.post<IMove>(getMovieUrl(`/`));
    },

    async deleteMovie(id: string) {
        return axiosClassic.delete<string>(getMovieUrl(`/${id}`))
    },

    async update(id: string, data: IMoviesEditProps) {
        return axiosClassic.put<string>(getMovieUrl(`/${id}`), data);
    },

    async getById(id: string) {
        return axiosClassic.get<IMoviesEditProps>(getMovieUrl(`/${id}`))
    },
};
