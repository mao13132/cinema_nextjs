import { AppProps } from "next/app";
import Head from "next/head";
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <div>
            <Head>
                <title>
                    Гланый тайтл
                </title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />

            </Head>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;