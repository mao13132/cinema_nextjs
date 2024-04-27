import { SingleMovieProps } from "./SingleMovie.props";
import styles from './SingleMovie.module.css';
import { IMoviePage } from "../../../../pages/movie/[slug]";
import Head from "next/head";
import { Banner } from "@/components/ui/Banner/Banner";
import { SubHeading } from "@/components/ui/SubHeading/SubHeading";
import { Gallery } from "@/components/ui/Gallery/Gallery";
import { ContentMovie } from "./ContentMovie/ContentMovie";

export const SingleMovie = ({ movie, similarMovies }: IMoviePage): JSX.Element => {
    return (
        <div className={styles['single-movie']}>
            <Head>
                <title>{movie?.title}</title>
                <meta
                    itemProp="description"
                    name="description"
                    content={`Смотреть ${movie?.title}`} />
            </Head>

            {movie?.bigPoster && <Banner image={movie?.bigPoster} className={styles['banner']} Detail={() => <ContentMovie movie={movie} />} />}

            <div className={styles['gallery-row']}>

                <SubHeading className={styles['subhead']} title='Рекомендуем' />

                <Gallery items={similarMovies} />

            </div>

        </div>
    );
};