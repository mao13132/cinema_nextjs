import { getActorUrl } from "@/config/url.config";
import { IActor } from "@/shared/types/movie.types";
import { axiosClassic } from "api/interceptors";

export const AvtorsService = {
    async getAllActors(searchTerm?: string) {
        return axiosClassic.get<IActor[]>(getActorUrl(``), {
            params: searchTerm ? { searchTerm } : {},
        })
    },


    async deleteActors(id: string) {
        return axiosClassic.delete<string>(getActorUrl(`/${id}`))
    },

};
