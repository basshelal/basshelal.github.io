import React, {FC} from "react"
import {P} from "../../Utils"

export interface BlogPost {
    readonly fileName: string,
    /** Title of the post, ideally should not be modified after publish*/
    readonly title: string,
    /** Date the post was published, should never be modified */
    readonly datePublished: string,
    /** Tags this post belongs to, this can (but should not) be empty */
    readonly tags: Array<string>,
}

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