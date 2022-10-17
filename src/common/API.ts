import {BlogPost} from "./BlogPost"
import {URLs} from "./URLs"

export const API = new class {
    public async getBlogPosts(): Promise<Array<BlogPost>> {
        const response = await fetch(URLs.manifestURL)
        if (response.ok) {
            const json = await response.json()
            if (!!json && Array.isArray(json)) {
                return json as Array<BlogPost>
            }
        }
        throw Error()
    }

    public async getBlogPostText(fileName: string): Promise<string> {
        const response = await fetch(`${URLs.postsURL}/${fileName}`)
        if (response.ok) {
            return response.text()
        }
        throw Error()
    }
}