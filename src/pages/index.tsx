import { Home } from "@/components/screens/Home/Home";
import { HomeProps } from "@/components/screens/Home/Home.props";
import { IGalleryItem } from "@/components/ui/Gallery/GalleryItem/GalleryItem.props";
import { ISlide } from "@/components/ui/Slider/Slider.props";
import { getActorUrl, getMovieUrl } from "@/config/url.config";
import { MovieService } from "@/services/MovieService.service";
import { AvtorsService } from "@/services/actors.service";
import { IActor } from "@/shared/types/movie.types";
import { getGenresList } from "@/utils/movie/getGenresList";
import { withLayout } from "Layout/Layout";
import { GetStaticProps } from "next";

interface IIndex extends Record<string, unknown> {
  slides: ISlide[];
  trendingMoves: IGalleryItem[];
  actors: IGalleryItem[];
};

function Index({ slides, actors, trendingMoves }: IIndex) {

  return (<Home slides={slides} actors={actors} trendingMoves={trendingMoves} />);

}

export default withLayout(Index);


export const getStaticProps: GetStaticProps = async () => {

  const actors: IGalleryItem[] = []

  try {

    const { data: movies } = await MovieService.getAll();

    try {
      const { data: actrorsData } = await AvtorsService.getAllActors();

      const actors: IGalleryItem[] = actrorsData.slice(0, 7).map(_actor => ({
        name: _actor.name,
        posterPath: _actor.photo,
        link: getActorUrl(_actor.slug),
        content: {
          title: _actor.name,
          subTiyle: `+${_actor.countMovies} фильмов`
        }
      }))

    } catch (error) {
      console.log(`Ошибка при запросе актёров. index ${error}`)

    }

    const dataTrendingMovies = await MovieService.getPopularMovies();

    const trendingMoves: IGalleryItem[] = dataTrendingMovies.slice(0, 7).map(_actor => ({
      name: _actor.title,
      posterPath: _actor.poster,
      link: getActorUrl(_actor.slug),
    }))

    const slides: ISlide[] = movies.slice(0, 7).map((_movie) => (
      {
        id: _movie.id,
        link: getMovieUrl(_movie.slug),
        bigPoster: _movie.bigPoster,
        subTitle: getGenresList(_movie.genres),
        title: _movie.title,
      }
    ))

    return {
      props: {
        slides,
        actors,
        trendingMoves,
      } as IIndex
    }

  } catch (error) {
    console.log(`Ошибка главной страници ${error}`)

    return {
      notFound: true,
    }
  };


}