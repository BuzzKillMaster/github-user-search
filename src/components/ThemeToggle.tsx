import React from "react";
import {BsFillMoonFill, BsFillSunFill} from "react-icons/bs";

export default function ThemeToggle(props: {
    useDarkTheme: boolean
    switchTheme: () => void
}) {
    return (
        <div onClick={props.switchTheme} className={"flex items-center cursor-pointer hover:text-green-500"}>
            <p className={"text-sm font-semibold mr-4"}>{props.useDarkTheme ? "Dark" : "Light"}</p>
            {props.useDarkTheme ? <BsFillMoonFill/> : <BsFillSunFill/>}
        </div>
    )
}