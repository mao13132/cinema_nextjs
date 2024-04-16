import { getUserUrl } from "@/config/api.config";
import { getAdminUrl } from "@/config/url.config";
import { axiosClassic } from "api/interceptors";

interface IAdminUsers {
    count_users: number
};

export const AdminService = {
    async getCountUsers() {
        return axiosClassic.get<IAdminUsers>(getAdminUrl('count'))
    }
};
