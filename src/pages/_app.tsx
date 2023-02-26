import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Head from "next/head";
import React from "react";

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>DevFinder</title>
                <meta name="description"
                      content="DevFinder enables you to search for any developer's username on GitHub and get a quick summary of their profile."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Component {...pageProps} />
        </>
    )
}
