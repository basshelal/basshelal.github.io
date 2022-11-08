import * as React from "react"
import {ImgHTMLAttributes, PropsWithChildren, useState} from "react"
import {useLayoutEffectAsync} from "../../../common/Utils"
import {LoadingSpinner} from "../../../common/components/LoadingSpinner"

export const GithubImage = (props: PropsWithChildren<ImgHTMLAttributes<HTMLImageElement>>) => {
    const [avatarUrl, setAvatarUrl] = useState<string>("")
    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    useLayoutEffectAsync(async () => {
        const json: any = await (await fetch("https://api.github.com/users/basshelal")).json()
        const url = json["avatar_url"]
        if (!!url) {
            setAvatarUrl(url)
            setIsLoaded(true)
        }
    }, [])

    const Image = () => {
        if (isLoaded) {
            return (<>
                <img src={avatarUrl}
                     alt="Github avatar"
                     title="Github avatar"
                     {...props}>
                    {props.children}
                </img>
            </>)
        } else {
            return (<>
                <LoadingSpinner {...props}/>
            </>)
        }
    }

    return (<Image/>)
}