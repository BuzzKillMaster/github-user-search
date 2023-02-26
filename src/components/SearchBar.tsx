import React, {FormEvent, useState} from "react";
import {BsSearch} from "react-icons/bs";
import {motion} from "framer-motion";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function SearchBar(props: {
    handleSearch: (query: string) => void,
    isSearching: boolean
}) {
    const [queryInput, setQueryInput] = useState("")

    const search = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        props.handleSearch(queryInput)
    }

    return (
        <motion.form layout onSubmit={search} transition={{ duration: 0.5 }} className={"bg-gray-200 dark:bg-slate-700 flex items-stretch p-3 rounded-xl"}>
            <div className={"text-xl pl-3 flex items-center"}>
                <BsSearch/>
            </div>
            <input onChange={(event) => setQueryInput(event.target.value)} disabled={props.isSearching} className={"bg-transparent flex-grow mx-6 outline-none w-full"} type="text" placeholder={"Search GitHub username..."}/>
            <button className={"bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-blue-500 flex items-center"}>
                {props.isSearching && <LoadingSpinner/>}
                <span className={props.isSearching ? "ml-4 animate-pulse" : ""}>
                    {props.isSearching ? "Searching..." : "Search"}
                </span>
            </button>
        </motion.form>
    )
}