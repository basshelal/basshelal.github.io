import {isDevelopment} from "./Utils"

export const URLs = new class {
    private readonly thisURL: URL = new URL(document.URL)
    public readonly baseURL = isDevelopment ? `${this.thisURL.origin}/api` :
        "https://raw.githubusercontent.com/basshelal/basshelal.github.io/master"
    public readonly filesURL = `${this.baseURL}/files`
    public readonly postsURL = `${this.filesURL}/blog-posts`
    public readonly manifestURL = `${this.postsURL}/manifest.json`
}