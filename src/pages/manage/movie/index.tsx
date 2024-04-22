
import { MoviesList } from "@/components/screens/admin/MoviesList/MoviesList";
import { NextPageAuth } from "@/shared/types/auth.types";
import { withLayout } from "Layout/Layout";

import { GetStaticProps } from 'next';

const MoviesPage: NextPageAuth = () => {
    return (<MoviesList />);
};

MoviesPage.isOnlyAdmin = true;

export default withLayout(MoviesPage);


export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {},
    }
}