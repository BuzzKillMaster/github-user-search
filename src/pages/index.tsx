import Head from 'next/head'
import React, {useEffect, useState} from "react";
import ThemeToggle from "@/components/ThemeToggle";
import SearchBar from "@/components/SearchBar";
import InformationContainer from "@/components/InformationContainer";
import AppContainer from "@/components/AppContainer";

export default function Home() {
    const [isDark, setIsDark] = useState(false)

    const switchTheme = () => {
        setTheme(!isDark)
        setIsDark(!isDark)
    }

    const setTheme = (isDark: boolean) => {
        localStorage.setItem("themeMode", isDark ? "dark" : "light")
    }

    useEffect(() => {
        const themeMode = localStorage.getItem("themeMode")
        const query = window.matchMedia('(prefers-color-scheme: dark)')

        const onChange = (event: MediaQueryListEvent) => setIsDark(event.matches)

        if (themeMode === null) {
            setIsDark(query.matches)
            query.addEventListener('change', onChange)
        } else {
            setIsDark(themeMode === "dark")
        }

        return () => query.removeEventListener('change', onChange)
    }, [])

    return (
        <>
            <Head>
                <title>DevFinder</title>
                <meta name="description"
                      content="DevFinder enables you to search for any developer's username on GitHub and get a quick summary of their profile."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                {/*<link rel="icon" href="/favicon.ico" />*/}
            </Head>
            <main className={isDark ? "dark" : ""}>
                <AppContainer isDark={isDark} switchTheme={switchTheme}/>
            </main>
        </>
    )
}
