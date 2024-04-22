import { getGenreUrl } from '@/config/url.config';
import { GenreService } from '@/services/genre.service';
import { IMenuItems } from 'Layout/Navigation/MenuItem/MenuItem.props';
import { useQuery } from 'react-query';

export const useAllGenres = () => {
    const queryData = useQuery('popular genre menu', () => GenreService.getAllGenres(), {
        select: ({ data }) => data.filter(genre => genre.icon).map(genre => {

            return (
                {
                    icon: genre.icon,
                    link: getGenreUrl(genre.slug),
                    title: genre.name
                } as IMenuItems
            )
        }).splice(0, 4),

    });

    return queryData
};