import { useActions } from "@/hooks/useActions";
import { useAuth } from "@/hooks/useAuth";
import { TypeComponentAuthFields } from "@/shared/types/auth.types";
import { useRouter } from "next/router";
import { FC, useEffect } from 'react';
import Cookies from 'js-cookie';
import dynamic from "next/dynamic";

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false });

export const AuthProvider: FC<TypeComponentAuthFields> = ({ children, Component: { isOnlyAdmin, isOnlyUser } }): any => {
    const { user } = useAuth();

    const { logout, checkAuth } = useActions();

    const { pathname } = useRouter();

    /* Только один раз, и без зависимостей */
    useEffect(() => {
        const accesToken = Cookies.get('accessToken');

        if (accesToken) {
            checkAuth();
        };

    }, []);

    useEffect(() => {
        const refreshToken = Cookies.get('refreshToken')

        if (!refreshToken && user) logout();

    }, [pathname]);

    return !isOnlyAdmin && !isOnlyUser ? <>{children}</> : <DynamicCheckRole Component={{ isOnlyAdmin, isOnlyUser }}>{children}</DynamicCheckRole>

};