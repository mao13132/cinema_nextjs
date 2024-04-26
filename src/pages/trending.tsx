import { Admin } from "@/components/screens/admin/Admin/Admin";
import { CatalogMovie } from "@/components/ui/CatalogMovie/CatalogMovie";
import { MovieService } from "@/services/MovieService.service";
import { NextPageAuth } from "@/shared/types/auth.types";
import { IMove } from "@/shared/types/movie.types";
import { withLayout } from "Layout/Layout";

import { GetStaticProps } from 'next';

interface ITrending extends Record<string, unknown> {
    movies: IMove[];
};



function TrendingPage({ movies }: ITrending) {

    return (<CatalogMovie
        movies={movies || []}
        title='Популярные фильмы'
        description="Популярные фильмы в высоком качестве Online"
    />);

}


TrendingPage.isOnlyAdmin = true;

export default withLayout(TrendingPage);


export const getStaticProps: GetStaticProps = async () => {
    try {

        const movies = await MovieService.getPopularMovies();

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