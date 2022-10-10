import * as React from "react"
import {PropsWithChildren, useState} from "react"
import {Avatar, AvatarProps} from "@material-ui/core"

export const GithubImage = (props: PropsWithChildren<AvatarProps>) => {
    const [avatarUrl, setAvatarUrl] = useState<string>("");

    (async () => { // fetch avatar image
        const json: any = await (await fetch("https://api.github.com/users/basshelal")).json()
        const url = json["avatar_url"]
        if (!!url) setAvatarUrl(url)
    })()

    return (<Avatar src={avatarUrl} alt="Github avatar" title="Github avatar" {...props}>{props.children}</Avatar>)
}