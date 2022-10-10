import * as React from "react"
import {FC} from "react"
import * as ReactDOM from "react-dom"
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom"
import {CV} from "./pages/cv/CV"
import {BlogPage} from "./pages/blog/BlogPage"
import {Home} from "./pages/home/Home"
import {NotFound} from "./pages/not-found/NotFound"

const Document: FC = () => {
    return (<BrowserRouter>
        <Switch>
            {/* Home */}
            <Route exact path="/home"><Home/></Route>
            <Route exact path="/"><Redirect to="/home"/></Route>
            <Route exact path="/index.html"><Redirect to="/home"/></Route>

            {/* Blog */}
            <Route exact path="/blog"><BlogPage/></Route>

            {/* CV */}
            <Route exact path="/cv"><CV/></Route>

            {/* Not Found */}
            <Route exact path="*"><NotFound/></Route>
        </Switch>
    </BrowserRouter>)
}

ReactDOM.render(
    <Document/>,
    document.getElementById("root")
)
