import React, {FC} from "react"
import {P} from "../../common/Utils"
import {BlogPost} from "../../common/BlogPost"

// View receives this from the list (which scanned all posts) and this is used to render the whole page
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

    return (<>
    </>)
}