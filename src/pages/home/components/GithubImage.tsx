import * as React from "react"
import {PropsWithChildren, useState} from "react"
import {Avatar, AvatarProps} from "@mui/material"
import {useLayoutEffectAsync} from "../../../common/Utils"

export const GithubImage = (props: PropsWithChildren<AvatarProps>) => {
    const [avatarUrl, setAvatarUrl] = useState<string>("")
    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    useLayoutEffectAsync(async () => {
        const response = await fetch("https://api.github.com/users/basshelal")
        const json: any = await response.json()
        const url = json["avatar_url"]
        if (!!url) {
            setAvatarUrl(url)
            setIsLoaded(true)
        }
    }, [])

    return (<Avatar src={avatarUrl}
                    variant="circular"
                    alt="Github avatar"
                    title="Github avatar"
                    {...props}>
        {props.children}
    </Avatar>)
}