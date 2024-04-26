import { IGenreEditProps } from "@/components/screens/admin/GenreEdit/GenreEdit.props";
import { getGenresUrl } from "@/config/api.config";
import { IGenre } from "@/shared/types/movie.types";
import { axiosClassic } from "api/interceptors";

export const GenreService = {
    async getAllGenres(searchTerm?: string) {
        return axiosClassic.get<IGenre[]>(getGenresUrl(``), {
            params: searchTerm ? { searchTerm } : {},
        })
    },

    async getById(id: string) {
        return axiosClassic.get<IGenreEditProps>(getGenresUrl(`/${id}`))
    },

    async getBySlug(slug: string) {
        return axiosClassic.get<IGenre>(getGenresUrl(`/by-slug/${slug}`))
    },


    async deleteGenres(id: string) {
        return axiosClassic.delete<string>(getGenresUrl(`/${id}`))
    },

    async update(id: string, data: IGenreEditProps) {
        return axiosClassic.put<string>(getGenresUrl(`/${id}`), data);
    },

    async create() {
        return axiosClassic.post<IGenre>(getGenresUrl(`/`));
    },

};
