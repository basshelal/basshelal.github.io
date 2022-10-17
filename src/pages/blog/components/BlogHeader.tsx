import React, {PropsWithChildren} from "react"
import {Paper} from "@mui/material"
import styled from "styled-components"

const Title = styled.h1`{
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-size: 4rem;
  color: white;
  text-align: center;
  text-decoration: none;
  padding: 8px;
  margin: 8px;
}`

export const BlogHeader = (props: PropsWithChildren<{}>) => {
    const paperStyle: React.CSSProperties = {
        backgroundColor: "#880E4F",
        width: "100vw"
    }
    // TODO: Standardized font-size clamp values, (at least min and max viewport values so scalability moves equally)
    return (<Paper square elevation={4} style={paperStyle}>
        <Title>Bassam Helal's Blog</Title>
    </Paper>)
}