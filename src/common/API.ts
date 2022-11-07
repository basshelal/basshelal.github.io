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

    public async getBlogPostBlurb(fileName: string): Promise<string> {
        let result = ""
        const response = await fetch(`${URLs.postsURL}/${fileName}`)
        if (response.ok && !!response.body) {
            const streamReader = response.body.getReader()
            const textDecoder = new TextDecoder("utf-8")
            let text = String()
            let blurbFound = false
            let readData = await streamReader.read()
            while (!blurbFound && !readData.done) {
                text = text.concat(textDecoder.decode(readData.value))
                const paragraphs = text.split("\n\n")
                // Find content, first "paragraph" is always title beginning with #
                //  so use 2nd one
                if (paragraphs.length >= 2 && !!paragraphs[1]) {
                    result = paragraphs[1]
                    blurbFound = true
                } else {
                    readData = await streamReader.read()
                }
            }
            await streamReader.cancel()
        } else  throw Error()
        return result
    }
}