import {NextApiRequest, NextApiResponse} from "next";
import {Octokit} from "@octokit/core";
import * as process from "process";
import {RequestError} from "@octokit/request-error";

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
})

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    const username: string | null = typeof request.query["username"] === "string" ? request.query["username"] : null

    if (username === null) {
        return response.status(400).end()
    }

    try {
        const result = await octokit.request('GET /users/{username}', {
            username: username
        })

        response.status(200).json(result.data)
    } catch (e) {
        return response.status((e as RequestError).status).end()
    }
}
