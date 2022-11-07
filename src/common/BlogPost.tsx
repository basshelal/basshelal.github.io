export interface BlogPost {
    /** Unique filename of the .md file containing the blog post, used as an ID */
    readonly fileName: string,
    /** Title of the post, ideally should not be modified after publish*/
    readonly title: string,
    /** Date the post was published, should never be modified */
    readonly datePublished: string,
    /** Tags this post belongs to, this can be empty */
    // TODO: Could change this to category instead of tags, such as C-Programming, JVM, Personal, Music etc etc
    readonly tags?: Array<string>,
}