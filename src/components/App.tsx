import * as React from "react"
import {Component, ReactNode} from "react"
import {BrowserRouter} from "react-router-dom"
import {Header} from "./Header"
import {ProjectsSection} from "./Sections"

export class App extends Component<{}, {}> {

    constructor(props: {}) {
        super(props)
    }

    public render(): ReactNode {

        return (
            <BrowserRouter>
                <Header/>
                <ProjectsSection/>
            </BrowserRouter>
        )
    }
}
