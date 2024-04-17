import { UsersList } from "@/components/screens/admin/UsersList/UsersList";
import { NextPageAuth } from "@/shared/types/auth.types";
import { withLayout } from "Layout/Layout";

import { GetStaticProps } from 'next';

const AdminUsersPage: NextPageAuth = () => {
    return (<UsersList />);
};

AdminUsersPage.isOnlyAdmin = true;

export default withLayout(AdminUsersPage);


export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {},
    }
}