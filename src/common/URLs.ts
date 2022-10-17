export const URLs = new class {
    public readonly thisURL: URL = new URL(document.URL)
    public readonly isDevMode: boolean = this.thisURL.hostname === "localhost"
    public readonly baseURL =
        this.isDevMode ? `${this.thisURL.origin}/api` :
            "https://raw.githubusercontent.com/basshelal/basshelal.github.io/master"
    public readonly filesURL = `${this.baseURL}/files`
    public readonly postsURL = `${this.filesURL}/blog-posts`
    public readonly manifestURL = `${this.postsURL}/manifest.json`
}