import * as React from "react"
import {ImgHTMLAttributes, PropsWithChildren} from "react"
import {URLs} from "../URLs"

export const LoadingSpinner = (props: PropsWithChildren<ImgHTMLAttributes<HTMLImageElement> & {size?: number}>) => {
    return (<img src={URLs.loadingSpinnerURL} width={props.size} height={props.size} {...props}>
        {props.children}
    </img>)
}