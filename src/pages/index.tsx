import React, {useEffect, useState} from "react";
import AppContainer from "@/components/AppContainer";

export default function Home() {
    const [themeLocated, setThemeLocated] = useState(false)
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

        setThemeLocated(true)

        return () => query.removeEventListener('change', onChange)
    }, [])

    return (
        <main className={isDark ? "dark" : ""}>
            {themeLocated && <AppContainer isDark={isDark} switchTheme={switchTheme}/>}
        </main>
    )
}
