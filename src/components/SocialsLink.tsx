import {ReactNode} from "react";

export default function SocialsLink(props: {
    icon: ReactNode
    text: string
    destination?: string
}) {
    return (
        <a href={props.destination} target={"_blank"} rel={"noreferrer"} className={(props.destination === undefined ? "pointer-events-none " : "") + "block flex items-center hover:text-green-500"}>
            { props.icon }
            <p className={"ml-4"}>{props.text}</p>
        </a>
    )
}