import { getGenresUrl } from "@/config/api.config";
import { IGenre } from "@/shared/types/movie.types";
import { axiosClassic } from "api/interceptors";

export const GenreService = {
    async getAllGenres(searchTerm?: string) {
        return axiosClassic.get<IGenre[]>(getGenresUrl(``), {
            params: searchTerm ? { searchTerm } : {},
        })
    },


    async deleteGenres(id: string) {
        return axiosClassic.delete<string>(getGenresUrl(`/${id}`))
    },

};
