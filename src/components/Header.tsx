import React, {FC} from "react"
import {P} from "../Utils"
import {List, ListItem, Paper, Typography} from "@material-ui/core"
import {Link} from "react-router-dom"

const LI: FC<{ href: string }> = (props: P<{ href: string }>) => {
    return (<ListItem style={{display: "flex", justifyContent: "center"}}>
        <Link to={props.href}>
            <Typography style={{fontSize: "2rem", fontFamily: "Roboto", fontWeight: 300}}>{props.children}</Typography>
        </Link>
    </ListItem>)
}

export const Header: FC = (props: P) => {
    return (<>
        <Paper square elevation={8} style={{backgroundColor: "#880E4F"}}>
            <Typography style={{
                fontSize: "4.5rem",
                fontFamily: "Roboto",
                fontWeight: 100,
                color: "white",
                flexGrow: 1,
                textAlign: "center"
            }}>
                Bassam Helal
            </Typography>
            <List style={{display: "flex", flexDirection: "row", padding: "0px"}}>
                <LI href="blog">Blog</LI>
                <LI href="cv">CV</LI>
            </List>
        </Paper>
    </>)
}