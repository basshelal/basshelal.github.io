import * as React from "react"
import {FC} from "react"
import {P} from "../../../Utils"
import {ListItem, Typography} from "@material-ui/core"

export const Text: FC = (props: P) => {
    return (<Typography variant="body2">{props.children}</Typography>)
}

export const Item: FC = (props: P) => {
    return (<ListItem><Text>{props.children}</Text></ListItem>)
}

export const Link: FC<{ href: string }> = (props: P<{ href: string }>) => {
    return (<a href={props.href} target="_blank">{props.children}</a>)
}