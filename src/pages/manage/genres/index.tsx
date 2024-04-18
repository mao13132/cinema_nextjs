import { GenresList } from "@/components/screens/admin/GenresList/GenresList";
import { NextPageAuth } from "@/shared/types/auth.types";
import { withLayout } from "Layout/Layout";

import { GetStaticProps } from 'next';

const GenersPage: NextPageAuth = () => {
    return (<GenresList />);
};

GenersPage.isOnlyAdmin = true;

export default withLayout(GenersPage);


export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {},
    }
}