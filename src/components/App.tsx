import * as React from "react"
import {Component, ReactNode} from "react"
import {BrowserRouter} from "react-router-dom"

export default class App extends Component<{}, {}> {

    constructor(props: {}) {
        super(props)
    }

    public render(): ReactNode {

        return (
            <BrowserRouter>
                <div>
                    <h1>Hello World!</h1>
                </div>
            </BrowserRouter>
        )
    }
}
