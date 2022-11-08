import * as React from "react"
import {createRoot} from "react-dom/client"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {CV} from "./pages/cv/CV"
import {Blog} from "./pages/blog/Blog"
import {Home} from "./pages/home/Home"
import {NotFound} from "./pages/not-found/NotFound"
import {BlogPostView} from "./pages/blog/BlogPostView"

const Document = () => {
    return (<BrowserRouter>
        <Routes>
            {/* Home */}
            <Route path="/" element={<Home/>}/>

            {/* Blog Post */}
            <Route path="/blog/:fileName" element={<BlogPostView/>}/>

            {/* Blog */}
            <Route path="/blog" element={<Blog/>}/>

            {/* CV */}
            <Route path="/cv" element={<CV/>}/>

            {/* Not Found */}
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>)
}

createRoot(document.getElementById("root")!)
    .render(<Document/>)
