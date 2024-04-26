import { Heading } from "@/components/ui/Heading/Heading";
import { HomeProps } from "./Home.props";
import styles from './Home.module.css';
import { toastr } from "react-redux-toastr";
import Head from "next/head";
import { Slider } from "@/components/ui/Slider/Slider";
import { SubHeading } from "@/components/ui/SubHeading/SubHeading";
import { Gallery } from "@/components/ui/Gallery/Gallery";

export const Home = ({ actors, trendingMoves, slides, ...props }: HomeProps): JSX.Element => {
    return (
        <div className={styles['main']} {...props}>
            <Head>
                <title>Смотреть фильмы Online</title>
            </Head>
            {slides?.length && <Slider slides={slides} />}

            {trendingMoves && (<div className={styles['tranding-row']}>

                <SubHeading className={styles['tranding__subtitle']} title="Популярные" />

                <Gallery className={styles['gallery']} items={trendingMoves} />

            </div>)}


            {actors?.length && (<div className={styles['best-actors-row']}>

                <SubHeading className={styles['actors__subtitle']} title="Популярные актёры" />

                <Gallery className={styles['gallery']} items={actors} />

            </div>)}



            {/* <button onClick={() => { toastr.success('Auth', 'Вы успешно авторизовались') }}>КНОПИЩЕ</button> */}
        </div>
    );
};