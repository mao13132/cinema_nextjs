import { useAuth } from "@/hooks/useAuth";
import { TypeComponentAuthFields } from "@/shared/types/auth.types";
import { useRouter } from "next/router";
import { FC } from "react";

const CheckRole: FC<TypeComponentAuthFields> = ({ children, Component: { isOnlyAdmin, isOnlyUser } }): any => {

    const { user } = useAuth();

    const router = useRouter();

    const Children = () => <>{children}</>;

    /* Лишнее, перенесли в authProvider */
    /* if (!isOnlyAdmin && !isOnlyUser) {
        return Children;
    }; */

    /* if (user?.isAdmin) return <Children/>; */

    if (isOnlyAdmin) {
        router.pathname !== '/404' && router.replace('404')

        return null;
    }

    /* const isUser = user && !user.isAdmin */
    const isUser = user;

    if (isUser && isOnlyUser) return <Children />
    else {
        router.pathname !== '/auth' && router.replace('/auth')

        return null
    }

};

export default CheckRole;
