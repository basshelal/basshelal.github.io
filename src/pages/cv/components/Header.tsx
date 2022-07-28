import React, {FC} from "react"
import {Avatar, Paper, Typography} from "@material-ui/core"
import {P, state} from "../../../Utils"
import styled from "styled-components"

export const Header: FC = (props: P) => {

    const {get: avatarUrl, set: setAvatarUrl} = state<string>("");

    (async () => { // fetch avatar image
        const json: any = await (await fetch("https://api.github.com/users/basshelal")).json()
        const url = json["avatar_url"]
        if (!!url) setAvatarUrl(url)
    })()

    const NameTypography = styled(Typography)`{
      font-family: "Roboto", sans-serif;
      font-weight: 100;
      font-size: clamp(2.25rem, 10vw, 5.5rem);
      color: #FFFFFF;
    }`

    const GitHubAvatar = styled(Avatar)`{
      margin: 16px;
      width: clamp(64px, 15vw, 128px);
      height: auto;
    }`

    return (<>
        <Paper square elevation={8} style={{
            backgroundColor: "#880E4F",
            borderBottomLeftRadius: "16px",
            borderBottomRightRadius: "16px"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "end",
                alignItems: "center",
                justifyContent: "center",
                padding: "0px"
            }}>
                <GitHubAvatar src={avatarUrl} alt="Github avatar" title="Github avatar"/>
                <NameTypography>Bassam Helal</NameTypography>
            </div>
        </Paper>
        <div style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
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
