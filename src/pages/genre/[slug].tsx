
import { CatalogMovie } from "@/components/ui/CatalogMovie/CatalogMovie";
import { getCategoryGenreUrl } from "@/config/url.config";
import { MovieService } from "@/services/MovieService.service";
import { GenreService } from "@/services/genre.service";
import { NextPageAuth } from "@/shared/types/auth.types";
import { IGenre, IMove } from "@/shared/types/movie.types";
import { withLayout } from "Layout/Layout";

import { GetStaticPaths, GetStaticProps } from 'next';

interface IGenrePage extends Record<string, unknown> {
    movies: IMove[];
    genre: IGenre | undefined;
};



function GenrePage({ movies, genre }: IGenrePage) {

    return genre ? (<CatalogMovie
        movies={movies || []}
        title={genre.name}
        description={genre.description}
    />) : <>NorFound</>;

}


GenrePage.isOnlyAdmin = true;

export default withLayout(GenrePage);

export const getStaticPaths: GetStaticPaths = async () => {
    try {

        const { data: genres } = await GenreService.getAllGenres()

        const paths = genres.map((g) => (
            {
                params: { slug: g.slug }
            }
        ))

        /* let pathsList: string[] = [];

        pathsList = pathsList.concat(genres.map(gen => getCategoryGenreUrl(gen.slug))) */


        return {
            paths,
            /* paths: pathsList, */
            fallback: true
        }
    } catch {
        debugger
        return {
            paths: [],
            fallback: false
        }
    }
};


export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {

        const { data: genre } = await GenreService.getBySlug(String(params?.slug));

        const { data: movies } = await MovieService.getByGenres([genre.id]);

        return {
            props: {
                movies,
                genre
            }
        }
    } catch {
        return {
            notFound: true,
        }
    }
}