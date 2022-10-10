import * as React from "react"
import {HTMLAttributes, PropsWithChildren} from "react"
import {GithubImage} from "./components/GithubImage"
import styled from "styled-components"
import {Button, ButtonProps, List, ListItem} from "@material-ui/core"
import {Link} from "react-router-dom"

export const Centered = (props: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
    return (<div style={{
        display: "flex",
        flexDirection: "row",
        alignContent: "end",
        alignItems: "center",
        justifyContent: "center",
        padding: "0px"
    }} {...props}>{props.children}</div>)
}

export const Home = () => {

    const ImageStyle: React.CSSProperties = {
        width: "256px",
        height: "256px",
        marginTop: "64px",
        boxShadow: "0 0 10px 5px #0000007F"
    }

    const NameHeading = styled.h1`{
      font-family: "Roboto", sans-serif;
      font-weight: 100;
      font-size: 8rem;
      color: #880E4F;
      padding: 0;
      margin: 0;
    }`

    const Subtitle = styled.h2`{
      font-family: "Roboto", sans-serif;
      font-weight: 300;
      font-size: 3rem;
      color: #000000;
      padding: 0;
      margin: 0;
    }`

    const PageButton = (props: PropsWithChildren<ButtonProps>) => {
        return (<ListItem>
            <Button style={{
                textTransform: "none", background: "#880E4F", color: "white",
                fontFamily: "Roboto", fontWeight: 300, fontSize: "2rem", borderRadius: "16px"
            }}
                    fullWidth variant="contained" {...props}>{props.children}</Button>
        </ListItem>)
    }

    return (<>
        <Centered><GithubImage style={ImageStyle}/></Centered>
        <Centered><NameHeading>Bassam Helal</NameHeading></Centered>
        <Centered><Subtitle></Subtitle></Centered>
        <List>
            <Link to="/cv" style={{textDecoration: "none"}}><PageButton>CV</PageButton></Link>
            <Link to="/blog" style={{textDecoration: "none"}}><PageButton>Blog</PageButton></Link>
        </List>
    </>)
}
