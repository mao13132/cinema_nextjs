import { getAdminUrl } from "@/config/url.config";
import { axiosClassic } from "api/interceptors";

export const FileService = {

    async upload(file: FormData, folder?: string) {
        return axiosClassic.post<{ file: string, name: string }>(getAdminUrl(`/files`), file, {
            params: { folder },
            headers: { 'Content-Type': 'multipart/form-data' }
        })
    },

};