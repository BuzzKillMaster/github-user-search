import React from "react";
import InformationPiece from "@/components/InformationPiece";
import SocialsLink from "@/components/SocialsLink";
import {BsTwitter} from "react-icons/bs";
import {MdLocationOn} from "react-icons/md";
import {AiOutlineLink} from "react-icons/ai";
import {HiOutlineOfficeBuilding} from "react-icons/hi";

export default function InformationContainer(props: {
    information: {
        login: string
        avatar_url: string
        html_url: string
        name: string
        company: string
        blog: string
        location: string
        bio: string
        twitter_username: string
        public_repos: number
        followers: number
        following: number
        created_at: string
    }
}) {
    const stringChecker = (input: string, output: string = "Not found") => {
        return input === null || input.length === 0 ? output : input
    }

    return (
        <div className={"bg-gray-200 dark:bg-slate-700 p-6 rounded-xl mt-4"}>
            <div className={"flex justify-between"}>
                <div>
                    <h2 className={"text-lg font-bold"}>{stringChecker(props.information.name)}</h2>

                    <small className={"font-semibold"}>
                        <a className={"hover:text-green-500"} href={props.information.html_url} target={"_blank"} rel={"noreferrer"}>@{props.information.login}</a>
                    </small>
                </div>

                <small className={"font-semibold"}>{new Date(props.information.created_at).toDateString()}</small>
            </div>


            <p className={"my-6"}>{stringChecker(props.information.bio, "This user has no bio.")}</p>

            <div className={"bg-gray-300 dark:bg-slate-800 p-6 rounded-xl sm:grid sm:grid-cols-3 pb-0"}>
                <InformationPiece title={"Repos"} value={props.information.public_repos}/>
                <InformationPiece title={"Followers"} value={props.information.followers}/>
                <InformationPiece title={"Following"} value={props.information.following}/>
            </div>

            <div className={"grid sm:grid-cols-2 text-sm font-semibold mt-6 gap-4"}>
                <SocialsLink icon={<MdLocationOn/>} text={stringChecker(props.information.location)}/>
                <SocialsLink icon={<BsTwitter/>} text={stringChecker(props.information.twitter_username)}/>
                <SocialsLink icon={<AiOutlineLink/>} text={stringChecker(props.information.blog)}/>
                <SocialsLink icon={<HiOutlineOfficeBuilding/>} text={stringChecker(props.information.company)}/>
            </div>
        </div>
    )
}