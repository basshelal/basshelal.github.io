import React from "react"
import {P} from "../../common/Utils"
import {BlogPost} from "../../common/BlogPost"
import {useParams} from "react-router-dom"

// View receives this from the list (which scanned all posts) and this is used to render the whole page
export interface BlogViewProps {
    blogPost?: BlogPost
}

export const BlogView = (props: P<BlogViewProps>) => {
    const {fileName} = useParams<{ fileName: string }>()
    return (<h1>{fileName}</h1>)

    // Blog Title
    // Subtitle
    // Date (Published and Modified), maybe even link to git of the content file
    // estimated read-time? related to word count https://infusion.media/content-marketing/how-to-calculate-reading-time/
    // tags, each clickable
    // Content (can contain headings & subheadings, images and code blocks, table of contents inside the content)
}