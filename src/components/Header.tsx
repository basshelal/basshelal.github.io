import React, {FC} from "react"
import {Avatar, Paper, Typography} from "@material-ui/core"
import {P, state} from "./Utils"

export interface HeaderState {
    avatarUrl?: string
}

export const Header: FC = (props: P) => {

    const {get: avatarUrl, set: setAvatarUrl} = state<string>("")

    const fetchAvatarImage = async () => {
        const json: any = await (await fetch("https://api.github.com/users/basshelal")).json()
        const url = json["avatar_url"]
        if (!!url) setAvatarUrl(url)
    }

    fetchAvatarImage()

    return (<Paper elevation={14} square style={{backgroundColor: "#880E4F"}}>
        <Avatar src={avatarUrl} style={{width: 200, height: 200}} alt="Github avatar"/>
        <Typography variant="h1">Bassam Helal</Typography>
        <a href="https://github.com/basshelal" target="_blank" title="Github profile">
            <img alt="Github profile" height="50" width="50" src="../res/images/github.svg"/></a>
        <a href="https://www.linkedin.com/in/bassamhelal" target="_blank" title="LinkedIn profile">
            <img alt="LinkedIn profile" height="50" width="50" src="../res/images/linkedin.svg"/></a>
        <a href="mailto:basshelal@gmail.com" target="_blank" title="Email">
            <img alt="Email" height="50" width="50" src="../res/images/email.svg"/></a>
    </Paper>)
}
