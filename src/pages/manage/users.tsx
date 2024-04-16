import { Admin } from "@/components/screens/admin/Admin/Admin";
import { NextPageAuth } from "@/shared/types/auth.types";
import { withLayout } from "Layout/Layout";

import { GetStaticProps } from 'next';

const AdminUsersPage: NextPageAuth = () => {
    return (
        <>
            <Admin />
        </>
    );
};

AdminUsersPage.isOnlyAdmin = true;

export default withLayout(AdminUsersPage);


export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {},
    }
}