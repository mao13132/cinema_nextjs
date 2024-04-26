import { IMoviesEditProps } from '@/components/screens/admin/MoviesList/MoviesList.props';
import { getMoviesUrl } from '@/config/api.config';
import { getActorUrl, getAllMovieUrl, getMovieUrl } from '@/config/url.config';
import { IActor, IMove } from '@/shared/types/movie.types';
import { axiosClassic } from 'api/interceptors';

export const MovieService = {
    async getAll(searchTerm?: string) {
        return axiosClassic.get<IMove[]>(getAllMovieUrl(), {
            params: searchTerm ? { searchTerm } : {},
        })
    },

    async getPopularMovies() {
        const { data: movies } = await axiosClassic.get<IMove[]>('/popular');

        return movies
    },

    async create() {
        return axiosClassic.post<IMove>(getAllMovieUrl());
    },

    async getByGenres(genreIds: string[]) {
        return axiosClassic.post<IMove[]>(getMovieUrl('by-genres'), { genreIds })
    },

    async getByActor(actorId: string) {
        return axiosClassic.post<IActor[]>(getActorUrl(`/by-actor/${actorId}`))
    },

    async deleteMovie(id: string) {
        return axiosClassic.delete<string>(getMovieUrl(`${id}`))
    },

    async update(id: string, data: IMoviesEditProps) {
        return axiosClassic.put<string>(getMovieUrl(`${id}`), data);
    },

    async getById(id: string) {
        return axiosClassic.get<IMoviesEditProps>(getMovieUrl(`${id}`))
    },
};
