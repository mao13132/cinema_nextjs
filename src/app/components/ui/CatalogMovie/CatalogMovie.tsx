import styles from './CatalogMovie.module.css';
import cn from 'classnames';
import { CatalogMovieProps } from './CatalogMovie.props';
import Head from 'next/head';
import { Description } from '../Heading/Description/Description';
import movie from '../../../../pages/manage/movie';
import { GalleryItem } from '../Gallery/GalleryItem/GalleryItem';
import { getMovieUrl } from '@/config/url.config';

export const CatalogMovie = ({ movies, title, description, className, ...props }: CatalogMovieProps): JSX.Element => {


    return (
        <div className={cn(styles['catalog-movie'], className)} {...props} >
            <Head>
                <title>{title}</title>

                <meta name="description" content={description} />
            </Head>

            {description && <Description text={description} className={styles['description']} />}

            <section className={styles['movies']}>

                {movies.map(mov => <GalleryItem variant='horizontal' key={mov.id} item={
                    {
                        name: mov.title,
                        link: getMovieUrl(mov.slug),
                        posterPath: mov.bigPoster,
                        content: {
                            title: mov.title
                        }

                    }
                } />)}

            </section>

        </div >

    );
};

