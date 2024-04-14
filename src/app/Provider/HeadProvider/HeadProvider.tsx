import { accentColor } from '@/config/constants';
import Head from 'next/head';
import NextProgressBar from 'nextjs-progressbar';
import { ReactNode } from 'react';



export const HeadProveder = ({ children }: {children: ReactNode}): JSX.Element => {
    return (
        <>
            <Head>
                <meta name='theme-color' content={'#181B1E'} />
            </Head>

            <NextProgressBar

                color={accentColor}
                startPosition={0.3}
                stopDelayMs={200}
                height={3}

            />
            {children}
        </>
    );
};