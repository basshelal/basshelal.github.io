import React, {FC} from "react"
import {Avatar, Paper, Typography} from "@material-ui/core"
import {P, state} from "../../../Utils"

export const Header: FC = (props: P) => {

    const {get: avatarUrl, set: setAvatarUrl} = state<string>("");

    (async () => { // fetch avatar image
        const json: any = await (await fetch("https://api.github.com/users/basshelal")).json()
        const url = json["avatar_url"]
        if (!!url) setAvatarUrl(url)
    })()

    return (<>
        <Paper square elevation={14} style={{backgroundColor: "#880E4F"}}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: "0px"
            }}>
                <Avatar src={avatarUrl} style={{width: 150, height: 150, margin: "16px"}}
                        alt="Github avatar" title="Github avatar"/>
                <Typography style={{
                    fontFamily: "Roboto",
                    fontWeight: 100,
                    fontSize: "5.5rem",
                    color: "#FFFFFF"
                }}>Bassam Helal</Typography>
            </div>
        </Paper>
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "8px",
            marginBottom: "-16px"
        }}>
            <a href="https://github.com/basshelal" target="_blank" title="Github profile" style={{margin: "16px"}}>
                <img alt="Github profile" height="50" width="50" src="../../../res/images/github.svg"/></a>
            <a href="https://www.linkedin.com/in/bassamhelal" target="_blank" title="LinkedIn profile"
               style={{margin: "16px"}}>
                <img alt="LinkedIn profile" height="50" width="50" src="../../../res/images/linkedin.svg"/></a>
            <a href="mailto:basshelal@gmail.com" target="_blank" title="Email" style={{margin: "16px"}}>
                <img alt="Email" height="50" width="50" src="../../../res/images/email.svg"/></a>
        </div>
    </>)
}
