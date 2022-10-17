import {BlogPost} from "./BlogPost"
import {API} from "./API"

export const GlobalState = new class {
    private _lastFetchBlogPosts = new Date().valueOf()
    private _blogPosts: Array<BlogPost> = []

    public async getAllBlogPosts(): Promise<Array<BlogPost>> {
        const fetchAgain = (Date.now() - this._lastFetchBlogPosts) >= 60 * 1000
        if (this._blogPosts.length == 0 || fetchAgain) {
            this._blogPosts = await API.getBlogPosts()
        }
        return this._blogPosts
    }

    public async getBlogPost(fileName: string): Promise<BlogPost> {
        const result: BlogPost | undefined = (await this.getAllBlogPosts()).find((it) => it.fileName === fileName)
        if (result) return result
        else throw Error()
    }
}