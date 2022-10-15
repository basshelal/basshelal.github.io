import React, {PropsWithChildren} from "react"
import {Paper, Typography} from "@mui/material"
import {Link} from "react-router-dom"

export const BlogHeader = (props: PropsWithChildren<{}>) => {
    const paperStyle: React.CSSProperties = {
        backgroundColor: "#880E4F",
        minWidth: "100vw"
    }
    const textStyle: React.CSSProperties = {
        fontSize: "4rem",
        fontFamily: "Roboto",
        fontWeight: 100,
        color: "white",
        flexGrow: 1,
        textAlign: "center",
        textDecoration: "none"
    }
    return (<Paper square elevation={4} style={paperStyle}>
        <Typography style={textStyle}>Bassam Helal's Blog</Typography>
    </Paper>)
}