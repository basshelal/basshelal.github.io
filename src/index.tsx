import * as React from "react"
import {FC} from "react"
import * as ReactDOM from "react-dom"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {CV} from "./pages/cv/CV"
import {Blog} from "./pages/blog/Blog"
import {Home} from "./pages/home/Home"
import {NotFound} from "./pages/not-found/NotFound"

const Document: FC = () => {
    return (<BrowserRouter>
        <Switch>
            {/* Home */}
            <Route exact path="/"><Home/></Route>

            {/* Blog */}
            <Route exact path="/blog"><Blog/></Route>

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
