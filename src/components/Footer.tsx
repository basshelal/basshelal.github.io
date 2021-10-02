import React, {FC} from "react"
import {P} from "../Utils"
import {Paper} from "@material-ui/core"

export const Footer: FC = (props: P) => {
    return (<>
        <Paper square elevation={0} style={{backgroundColor: "#880E4F", marginTop: "16px"}}>
        </Paper>
    </>)
}