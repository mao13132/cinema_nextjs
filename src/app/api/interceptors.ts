import { API_URL } from "@/config/api.config";
import axios from 'axios';
import { errorCatch, getContentType } from "./api.helpers";
import Cookies from 'js-cookie';
import { authService } from "@/services/auth/auth.service";
import { removeTokensStorage } from "@/services/auth/auth.helper";

export const axiosClassic = axios.create({
    baseURL: API_URL,
    headers: getContentType(),
});

export const instance = axios.create({
    baseURL: API_URL,
    headers: getContentType(),
})

/* Просто добавляю в подключение токен */
instance.interceptors.request.use((config): any => {
    const accessToken = Cookies.get('accessToken');

    if (config.headers && accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config;

});


/* Вытаскиваем ошибку и смотрим, и в случае ошибки токена пытаемся его обновить 1 раз */
instance.interceptors.response.use((config): any => config, async error => {
    const originalRequest = error.config;

    if ((error.response.status === 401 || errorCatch(error) === 'jwt expired' || errorCatch(error) === 'jwt must be provided') && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;

        try {
            await authService.getNewTokens();

            return instance.request(originalRequest);
        } catch (error) {
            if (errorCatch(error) === 'jwt expired') removeTokensStorage()
        }

        throw error
    }

})


export default instance;
