import { SingleMovieProps } from "./SingleMovie.props";
import styles from './SingleMovie.module.css';
import { IMoviePage } from "../../../../pages/movie/[slug]";
import Head from "next/head";
import { Banner } from "@/components/ui/Banner/Banner";
import { SubHeading } from "@/components/ui/SubHeading/SubHeading";
import { Gallery } from "@/components/ui/Gallery/Gallery";
import { ContentMovie } from "./ContentMovie/ContentMovie";
import dynamic from "next/dynamic";

const DynamicPlayer = dynamic(() => import('@/ui/VideoPlayer/VideoPlayer'))

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

            <DynamicPlayer slug={movie?.slug} videoSources={`http://127.0.0.1:8000/media/matrix.mp4`} />
            {/* <DynamicPlayer slug={movie?.slug} videoSources={movie?.videoUrl} /> */}

            <div className={styles['gallery-row']}>

                <SubHeading className={styles['subhead']} title='Рекомендуем' />

                <Gallery items={similarMovies} />

            </div>

        </div>
    );
};