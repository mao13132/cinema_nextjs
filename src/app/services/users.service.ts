import { getUserUrl } from "@/config/api.config";
import { IUser } from "@/shared/types/user.types";
import { axiosClassic } from "api/interceptors";

export const UsersService = {
    async getAll(searchTerm?: string) {
        return axiosClassic.get<IUser[]>(getUserUrl(``), {
            params: searchTerm ? { searchTerm } : {},
        })
    },

    async deleteUser(id: string) {
        return axiosClassic.delete<string>(getUserUrl(`/${id}`))
    },

};
