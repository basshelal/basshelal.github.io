import * as React from "react"
import {FC} from "react"
import {P} from "./Utils"

export const Link: FC<{ href: string }> = (props: P<{ href: string }>) => {
    return (<a href={props.href} target="_blank">{props.children}</a>)
}