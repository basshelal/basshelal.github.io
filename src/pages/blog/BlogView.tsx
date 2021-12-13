import React, {FC} from "react"
import {P} from "../../Utils"

// Must be serializable because this will be stored in a json or yaml file
export interface BlogPost {
    title: string,
    url: string,
    datePublished: number,
    dateLastModified?: number,
    subtitle?: string,
    tags: Array<string>,
    componentFile: string, // the file containing the react component that will be rendered or shown
    contentFile: string, // the file containing the content that the react component will use to render the content,
                         // this is like a .md file
}

// View receives this from the list (which scanned all posts) and this used to render the whole page
export interface BlogViewProps {
    blogPost: BlogPost
}

export const BlogView: FC<BlogViewProps> = (props: P<BlogViewProps>) => {
    // Blog Title
    // Subtitle
    // Date (Published and Modified), maybe even link to git of the content file
    // estimated read-time? related to word count https://infusion.media/content-marketing/how-to-calculate-reading-time/
    // tags, each clickable
    // Content (can contain headings & subheadings, images and code blocks, table of contents inside the content)
    // Previous Post?
    // Next Post?

    return (<>
    </>)
}