import React, {FC} from "react"
import {P} from "../../Utils"

export interface BlogPost {
    /** Title of the post, ideally should not be modified after publish*/
    readonly title: string,
    /** Unique identifier of the post, this is used for the url and should NEVER change, even if everything else changed */
    readonly id: string,
    /** Date the post was published, should never be modified */
    readonly datePublished: Date,
    /** Date the post was last modified, if never modified then null and will not show in the view */
    readonly dateLastModified?: Date,
    /** Subtitle, a small sentence like a blurb under the title */
    readonly subtitle?: string,
    /** Tags this post belongs to, this can (but should not) be empty */
    readonly tags: Array<string>,
    /** The path of the file of the contents of this post, we will use .md (Markdown) files */
    readonly contentFilePath: string,
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