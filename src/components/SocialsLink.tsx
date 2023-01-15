import {ReactNode} from "react";

export default function SocialsLink(props: {
    icon: ReactNode
    text: string
}) {
    return (
        <div className={"block flex items-center"}>
            { props.icon }
            <p className={"ml-4"}>{props.text}</p>
        </div>
    )
}