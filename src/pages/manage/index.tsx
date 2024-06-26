import { Admin } from "@/components/screens/admin/Admin/Admin";
import { NextPageAuth } from "@/shared/types/auth.types";
import { withLayout } from "Layout/Layout";

import { GetStaticProps } from 'next';

const IndexManagePage: NextPageAuth = () => {
    return (<><Admin /></>);
};

IndexManagePage.isOnlyAdmin = true;

export default withLayout(IndexManagePage);


export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {},
    }
}