import React, {Component, ReactNode} from "react"
import {Avatar, Paper, Typography} from "@material-ui/core"

export interface HeaderState {
    avatarUrl?: string
}

export class Header extends Component<{}, HeaderState> {

    constructor(props: {}) {
        super(props)
        this.fetchAvatarImage = this.fetchAvatarImage.bind(this)
        this.state = {}
        this.fetchAvatarImage()
    }

    public async fetchAvatarImage() {
        const json: any = await (await fetch("https://api.github.com/users/basshelal")).json()
        const url = json["avatar_url"]
        if (!!url) this.setState({avatarUrl: url})
    }

    public render(): ReactNode {
        return (
            <Paper elevation={8} square style={{backgroundColor: "#880E4F"}}>
                <Avatar src={this.state.avatarUrl} style={{width: 200, height: 200}} alt="Github avatar"/>
                <Typography variant="h1">Bassam Helal</Typography>
                <a href="https://github.com/basshelal" target="_blank" title="Github profile">
                    <img alt="Github profile" height="50" width="50" src="../res/images/github.svg"/></a>
                <a href="https://www.linkedin.com/in/bassamhelal/" target="_blank" title="LinkedIn profile">
                    <img alt="LinkedIn profile" height="50" width="50" src="../res/images/linkedin.svg"/></a>
                <a href="mailto:basshelal@gmail.com" target="_blank" title="Email">
                    <img alt="Email" height="50" width="50" src="../res/images/email.svg"/></a>
            </Paper>
        )
    }

}