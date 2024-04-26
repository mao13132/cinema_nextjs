import { Admin } from "@/components/screens/admin/Admin/Admin";
import { CatalogMovie } from "@/components/ui/CatalogMovie/CatalogMovie";
import { MovieService } from "@/services/MovieService.service";
import { NextPageAuth } from "@/shared/types/auth.types";
import { IMove } from "@/shared/types/movie.types";
import { withLayout } from "Layout/Layout";

import { GetStaticProps } from 'next';

interface IFresh extends Record<string, unknown> {
    movies: IMove[];
};



function FreshPage({ movies }: IFresh) {

    return (<CatalogMovie
        movies={movies || []}
        title='Свежие фильмы'
        description="Новые фильмы в высоком качестве Online"
    />);

}


FreshPage.isOnlyAdmin = true;

export default withLayout(FreshPage);


export const getStaticProps: GetStaticProps = async () => {
    try {

        const { data: movies } = await MovieService.getAll();

        return {
            props: {
                movies
            }
        }
    } catch {
        return {
            notFound: true,
        }
    }
}