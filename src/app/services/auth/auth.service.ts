import { getAuthUrl, getLoginUrl } from "@/config/api.config";
import { IAuthResponse, ITokens } from "@/store/user/user.interface";
import { axiosClassic } from "api/interceptors";
import { removeTokensStorage, saveToStroge } from "./auth.helper";

import Cookies from 'js-cookie';
import { getContentType } from "api/api.helpers";

export const authService = {
    async register(email: string, password: string) {
        const response = await axiosClassic.post<IAuthResponse>(getAuthUrl('/register'), { email: email, password: password })

        if (response.data.access) {
            /* Если всё ок то сохраняем в cookie */
            saveToStroge(response.data);
        }

        return response;
    },
    
    async login(email: string, password: string) {

        const data = { username: email, password: password }

        const response = await axiosClassic.post<IAuthResponse>(getLoginUrl(), data)

        if (response.data.access) {
            /* Если всё ок то сохраняем в cookie */
            saveToStroge(response.data);
        }

        return response;
    },
    
    async logout() {
        removeTokensStorage();

        localStorage.removeItem('user');
    },

    async getNewTokens() {
        const refreshToken = Cookies.get('refreshToken');

        const response = await axiosClassic.post<IAuthResponse>(getAuthUrl('/login/access-token'), { refreshToken }, { headers: getContentType() })

        if (response.data.access) {
            /* Если всё ок то сохраняем в cookie */
            saveToStroge(response.data);
        }

        return response
    },
};
