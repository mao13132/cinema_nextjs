import { IActorEditProps } from "@/components/screens/admin/ActorsList/ActorsList.props";
import { getActorUrl } from "@/config/url.config";
import { IActor } from "@/shared/types/movie.types";
import { axiosClassic } from "api/interceptors";

export const AvtorsService = {
    async getAllActors(searchTerm?: string) {
        return axiosClassic.get<IActor[]>(getActorUrl(``), {
            params: searchTerm ? { searchTerm } : {},
        })
    },

    async create() {
        return axiosClassic.post<IActor>(getActorUrl(`/`));
    },


    async deleteActors(id: string) {
        return axiosClassic.delete<string>(getActorUrl(`/${id}`))
    },

    async update(id: string, data: IActorEditProps) {
        return axiosClassic.put<string>(getActorUrl(`/${id}`), data);
    },

    async getById(id: string) {
        return axiosClassic.get<IActorEditProps>(getActorUrl(`/${id}`))
    },

};
