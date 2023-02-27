import React, {useEffect, useState} from "react";
import AppContainer from "@/components/AppContainer";

export default function Home() {
    const [useDarkTheme, setUseDarkTheme] = useState<boolean | null>(null)

    useEffect(() => {
        const darkTheme = localStorage.getItem("useDarkTheme")
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

        const onChange = (event: MediaQueryListEvent) => setUseDarkTheme(event.matches)

        if (darkTheme !== null) {
            setUseDarkTheme(darkTheme === "true")
        } else {
            setUseDarkTheme(mediaQuery.matches)
            mediaQuery.addEventListener('change', onChange)
        }

        return () => mediaQuery.removeEventListener('change', onChange)
    }, [useDarkTheme])

    const switchTheme = () => {
        localStorage.setItem("useDarkTheme", (!useDarkTheme).toString())
        setUseDarkTheme(!useDarkTheme)
    }

    return (
        <main className={useDarkTheme ? "dark" : ""}>
            {useDarkTheme !== null && <AppContainer useDarkTheme={useDarkTheme} switchTheme={switchTheme}/>}
        </main>
    )
}
