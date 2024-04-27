import { ContentMovieProps } from "./ContentMovie.props";
import styles from './ContentMovie.module.css';
import cn from 'classnames';
import { Heading } from "@/components/ui/Heading/Heading";
import { ContentList } from "../ContentList/ContentList";
import { getGenreUrl } from "@/config/url.config";
import { getActorsUrl } from "@/config/api.config";
import { MaterialIcon } from "@/components/ui/MaterialIcon/MaterialIcon";

export const ContentMovie = ({ movie, ...props }: ContentMovieProps): JSX.Element => {
    return (
        <div className={styles['content']} {...props}>

            <Heading title={movie.title} className={styles['h1']} />

            <div className={styles['detailes']}>
                <span>{movie.parameters.year}.</span>
                <span>{movie.parameters.country}.</span>
                <span>{movie.parameters.duration} мин</span>
            </div>

            <ContentList name="Жанры" links={movie.genres.slice(0, 3).map(g => ({
                id: g.id,
                link: getGenreUrl(g.slug),
                title: g.name
            }))} />

            <ContentList name="Актёры" links={movie.actors.slice(0, 3).map(g => ({
                id: g.id,
                link: getActorsUrl(`/${g.slug}`),
                title: g.name
            }))} />

            <div className={styles['raiting']}>

                <MaterialIcon name="MdStarRate" />

                <span>{movie?.rating.toFixed(1)}</span>

            </div>

        </div>
    );
};