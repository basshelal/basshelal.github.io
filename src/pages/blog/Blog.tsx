import React, {PropsWithChildren, useLayoutEffect, useState} from "react"
import {BlogPost} from "./BlogView"
import {List} from "@material-ui/core"

const manifestURL = "https://raw.githubusercontent.com/basshelal/basshelal.github.io/master/files/blog-posts/manifest.json"

export const Blog = (props: PropsWithChildren<{}>) => {

    const [blogPosts, setBlogPosts] = useState<Array<BlogPost>>([])

    useLayoutEffect(() => {
        fetch(manifestURL).then((response: Response) => {
            if (response.ok) {
                response.json().then((json: Array<BlogPost>) => {
                    setBlogPosts(json)
                })
            }
        })
    })

    return (<>
        <h1>{blogPosts.length} posts available</h1>
        <List>
            {blogPosts.map((blogPost) => {
               return (<>
               <p>title: {blogPost.title}</p>
               <p>filename: {blogPost.fileName}</p>
               <p>datePublished: {blogPost.datePublished}</p>
               <p>tags: {blogPost.tags.toString()}</p>
               <p>------------------------------------</p>
               </>)
            })}
        </List>
    </>)
}