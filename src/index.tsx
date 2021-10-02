import * as React from "react"
import {FC} from "react"
import * as ReactDOM from "react-dom"
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom"
import {CV} from "./pages/cv/CV"
import {BlogPage} from "./pages/blog/BlogPage"
import {Header} from "./components/Header"
import {Footer} from "./components/Footer"

const Document: FC = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                {/* Home */}
                <Route exact path="/"><Redirect to="/cv"/></Route>
                <Route exact path="/home"><Redirect to="/"/></Route>

                {/* Blog */}
                <Route exact path="/blog"><BlogPage/></Route>

                {/* CV */}
                <Route exact path="/cv"><CV/></Route>

                {/* About */}
                <Route exact path="/about">About</Route>

                {/* Not Found */}
                <Route exact path="*">Not Found</Route>
            </Switch>
            <Footer/>
        </BrowserRouter>)
}

ReactDOM.render(
    <Document/>,
    document.getElementById("root")
)
