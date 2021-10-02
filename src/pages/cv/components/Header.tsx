import React, {FC} from "react"
import {Avatar, Button, Typography} from "@material-ui/core"
import {P, state} from "../../../Utils"
import {PictureAsPdf} from "@material-ui/icons"

export const Header: FC = (props: P) => {

    const {get: avatarUrl, set: setAvatarUrl} = state<string>("");

    (async () => { // fetch avatar image
        const json: any = await (await fetch("https://api.github.com/users/basshelal")).json()
        const url = json["avatar_url"]
        if (!!url) setAvatarUrl(url)
    })()

    return (<>
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "16px", marginBottom: "-16px"
        }}>
            <a title="Printable PDF Version" href="res/Bassam-Helal-CV.pdf" target="_blank">
                <Button style={{
                    color: "#880E4F",
                    fontFamily: "Roboto",
                    fontWeight: 300,
                    fontSize: "3rem",
                    textTransform: "none"
                }}><PictureAsPdf style={{fontSize: "3rem"}}/></Button>
            </a>
        </div>
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "0px"
        }}>
            <Avatar src={avatarUrl} style={{width: 150, height: 150, margin: "16px"}}
                    alt="Github avatar" title="Github avatar"/>
            <Typography variant="h1" style={{
                fontFamily: "Roboto",
                fontWeight: 100,
                color: "#880E4F"
            }}>Bassam Helal</Typography>
        </div>
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
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
