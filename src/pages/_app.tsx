import { AppProps } from "next/app";
import Head from "next/head";
import '../app/assets/styles/globals.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

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