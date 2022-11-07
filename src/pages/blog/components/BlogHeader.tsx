import React, {PropsWithChildren} from "react"
import {Paper} from "@mui/material"
import styled from "styled-components"

const Title = styled.h1`{
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  color: white;
  text-align: center;
  padding: 8px;
  margin: 8px;
}`

const Link = styled.a`{
  text-transform: none;
  text-decoration: none;
  color: white;
}`

export const BlogHeader = (props: PropsWithChildren<{ href?: string }>) => {
    const paperStyle: React.CSSProperties = {
        backgroundColor: "#880E4F",
        width: "100vw"
    }
    // TODO: Standardized font-size clamp values, (at least min and max viewport values so scalability moves equally)
    //  use this: https://clamp.font-size.app/
    return (<Paper square elevation={4} style={paperStyle}>
        <Title><Link href={props.href}>Bassam Helal's Blog</Link></Title>
    </Paper>)
}