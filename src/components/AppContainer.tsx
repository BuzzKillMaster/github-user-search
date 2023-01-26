import React, {useState} from "react";
import ThemeToggle from "@/components/ThemeToggle";
import SearchBar from "@/components/SearchBar";
import InformationContainer from "@/components/InformationContainer";
import {motion, AnimatePresence, LayoutGroup} from "framer-motion"

export default function AppContainer(props: {
    isDark: boolean
    switchTheme: () => void
}) {
    const [information, setInformation] = useState()
    const [isSearching, setIsSearching] = useState(false)

    const search = async (query: string) => {
        if (query.length === 0) {
            alert("You have to enter a username.")
            return
        }

        setIsSearching(true)

        const response = await fetch("/api/search?username=" + query)

        switch (response.status) {
            case 200:
                setInformation(await response.json())
                break;

            case 400:
                alert("Your request could not be processed. Please try again.")
                break;

            case 404:
                alert("It looks like that user could not be found. Are you sure you spelled their name correctly?")
                break;

            default:
                alert("We seem to have encountered an unknown error. Please try again.")

        }

        setIsSearching(false)
    }

    return (
        <div
            className={"bg-gray-100 dark:bg-slate-900 px-4 py-6 w-full min-h-screen dark:text-white flex items-center"}>
            <div className={"max-w-2xl w-full mx-auto"}>
                <LayoutGroup>
                    <motion.section layout transition={{ duration: 0.5 }} className={"flex justify-between items-center mb-8"}>
                        <h1 className={"text-xl font-bold"}>DevFinder</h1>

                        <ThemeToggle isDark={props.isDark} clickHandler={props.switchTheme}/>
                    </motion.section>

                    <SearchBar handleSearch={search} isSearching={isSearching}/>

                    <AnimatePresence>
                        {information !== undefined && (
                            <motion.section layout
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{ delay: 0.5 }}
                            >
                                <InformationContainer information={information}/>
                            </motion.section>
                        )}
                    </AnimatePresence>
                </LayoutGroup>
            </div>
        </div>
    )
}