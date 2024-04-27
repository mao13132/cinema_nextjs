
import { SingleMovie } from "@/components/screens/SingleMovie/SingleMovie";
import { CatalogMovie } from "@/components/ui/CatalogMovie/CatalogMovie";
import { IGalleryItem } from "@/components/ui/Gallery/GalleryItem/GalleryItem.props";
import { getCategoryGenreUrl, getMovieUrl } from "@/config/url.config";
import { MovieService } from "@/services/MovieService.service";
import { GenreService } from "@/services/genre.service";
import { NextPageAuth } from "@/shared/types/auth.types";
import { IGenre, IMove } from "@/shared/types/movie.types";
import { withLayout } from "Layout/Layout";

import { GetStaticPaths, GetStaticProps } from 'next';

export interface IMoviePage extends Record<string, unknown> {
    movie: IMove | undefined;
    similarMovies: IGalleryItem[];
};



function MoviePage({ movie, similarMovies }: IMoviePage) {

    return movie ? <SingleMovie similarMovies={similarMovies || []} movie={movie} /> : <div>Not Found</div>;

}


MoviePage.isOnlyAdmin = true;

export default withLayout(MoviePage);

export const getStaticPaths: GetStaticPaths = async () => {
    try {

        const { data: genres } = await MovieService.getAll()

        const paths = genres.map((m) => (
            {
                params: { slug: m.slug }
            }
        ))


        return {
            paths,
            fallback: true
        }
    } catch {
        debugger
        return {
            paths: [],
            fallback: true
        }
    }
};


export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {

        const { data: movie } = await MovieService.getBySlug(String(params?.slug));

        const { data: dataSimilarMovies } = await MovieService.getByGenres(movie.genres.map(g => g.id));

        const similarMovies: IGalleryItem[] = dataSimilarMovies.filter(m => m.id !== movie.id).map((m) => (
            {
                name: m.title,
                posterPath: m.poster,
                link: getMovieUrl(m.slug)
            }
        ))

        return {
            props: {
                movie,
                similarMovies,
            }
        }
    } catch {
        return {
            notFound: true,
        }
    }
}