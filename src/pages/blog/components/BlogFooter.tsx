import React, {FC, PropsWithChildren} from "react"
import {Paper} from "@material-ui/core"

export const BlogFooter: FC = (props: PropsWithChildren<{}>) => {
    return (<>
        <Paper square elevation={0} style={{backgroundColor: "#880E4F", marginTop: "16px"}}>
        </Paper>
    </>)
}