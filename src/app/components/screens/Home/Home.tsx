import { Heading } from "@/components/ui/Heading/Heading";
import { HomeProps } from "./Home.props";
import styles from './Home.module.css';
import { toastr } from "react-redux-toastr";
import Head from "next/head";

export const Home = ({ ...props }: HomeProps): JSX.Element => {
    return (
        <div {...props}>
            <Head>
                <title>Смотреть фильмы Online</title>
            </Head>
            {/* <button onClick={() => { toastr.success('Auth', 'Вы успешно авторизовались') }}>КНОПИЩЕ</button> */}
        </div>
    );
};