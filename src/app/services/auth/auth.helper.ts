import { IAuthResponse, ITokens } from "@/store/user/user.interface";

import Cookies from 'js-cookie';

export const saveTokensStorage = (data: ITokens) => {
    Cookies.set('accessToken', data.access)

    Cookies.set('refreshToken', data.refresh)

};

export const removeTokensStorage = () => {
    Cookies.remove('accessToken');

    Cookies.remove('refresgToken');
};

export const saveToStroge = (data: ITokens) => {

    saveTokensStorage(data);

    localStorage.setItem('user', JSON.stringify(data.access))

};
