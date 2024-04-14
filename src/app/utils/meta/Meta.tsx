import Head from "next/head";
import { ISeo } from "./Meta.interface";
import { useRouter } from "next/router";
import { siteName, titleMerge } from "@/config/seo.config";
import { onlyText } from "../string/clearText";

import logoImage from '@/assets/images/logo.svg';

export const Meta = ({ title, descriptions, image, children }: ISeo): JSX.Element => {

    const { asPath } = useRouter();

    const currentUrl = `${process.env.REACT_APP_URL}${asPath}`

    return (
        <>
            <Head>
                <title itemProp="headline">{titleMerge(title)}</title>

                {descriptions && (
                    <>
                        <meta
                            itemProp="description"
                            name="description"
                            content={onlyText(descriptions, 152)} />

                        <link rel="canonical" href={currentUrl} />

                        <meta property="og:locale" content="ru" />
                        <meta property="og:title" content={titleMerge(title)} />
                        <meta property="og:url" content={currentUrl} />
                        <meta property="og:image" content={image || logoImage} />
                        <meta property="og:site_name" content={siteName} />
                        <meta property="og:description" content={onlyText(descriptions, 197)} />

                    </>
                )}

            </Head>
            {children}
        </>
    );
};