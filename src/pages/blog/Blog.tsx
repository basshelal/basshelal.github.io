import React, {useState} from "react"
import {List, ListItem} from "@mui/material"
import {BlogHeader} from "./components/BlogHeader"
import {BlogFooter} from "./components/BlogFooter"
import {BlogPost} from "../../common/BlogPost"
import {P, useLayoutEffectAsync} from "../../common/Utils"

const manifestURL = "https://raw.githubusercontent.com/basshelal/basshelal.github.io/master/files/blog-posts/manifest.json"

export const Blog = (props: P) => {

    const [blogPosts, setBlogPosts] = useState<Array<BlogPost>>([])

    useLayoutEffectAsync(async () => {
        const response = await fetch(manifestURL)
        if (response.ok) {
            const json = await response.json() as Array<BlogPost>
            setBlogPosts(json)
        }
    })

    return (<>
        <BlogHeader/>
        <h1>{blogPosts.length} posts available</h1>
        <List>
            {blogPosts.map((blogPost) => {
                return (<ListItem key={blogPost.fileName}>
                    <pre>title: {blogPost.title}</pre>
                    <pre>filename: {blogPost.fileName}</pre>
                    <pre>datePublished: {blogPost.datePublished}</pre>
                    <pre>tags: [{blogPost.tags.join(", ")}]</pre>
                    <pre>------------------------------------</pre>
                </ListItem>)
            })}
        </List>
        <BlogFooter/>
    </>)
}

// TODO: Fixed footer at bottom of page