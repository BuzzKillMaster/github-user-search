import React from "react";
import {BsFillMoonFill, BsFillSunFill} from "react-icons/bs";

export default function ThemeToggle(props: {
    isDark: boolean
    clickHandler: () => void
}) {
    return (
        <div onClick={props.clickHandler} className={"flex items-center cursor-pointer hover:text-green-500"}>
            <p className={"text-sm font-semibold mr-4"}>{props.isDark ? "Dark" : "Light"}</p>
            {props.isDark ? <BsFillMoonFill/> : <BsFillSunFill/>}
        </div>
    )
}