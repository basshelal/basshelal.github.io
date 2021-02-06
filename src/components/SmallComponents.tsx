import * as React from "react"
import {FC} from "react"

export const Link: FC<{ href: string }> = (props) => {
    return (<a href={props.href} target="_blank">{props.children}</a>)
}