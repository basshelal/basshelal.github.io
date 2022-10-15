import React, {useState} from "react"
import {BlogPost} from "../../../common/BlogPost"
import {baseURL, P, useLayoutEffectAsync} from "../../../common/Utils"
import {Card, CardContent} from "@mui/material"
import styled from "styled-components"

const postBaseUrl = `${baseURL}/files/blog-posts/`

export interface BlogListEntryProps {
    readonly key: string
    readonly blogPost: BlogPost
}

const Root = styled.div`{
  display: flex;
  flex-direction: row;
  align-content: end;
  align-items: center;
  justify-content: center;
  padding: 4px;
  margin: 16px;
}`

const Title = styled.a`{
  font-family: "Roboto", sans-serif;
  font-size: 1.75rem;
  font-weight: 400;
}`

const Blurb = styled.p`{
  font-family: "Roboto", sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  margin: 8px;
  padding: 2px;
}`

const Date = styled.p`{
  font-family: "Roboto Mono", monospace;
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  padding: 0;
  margin-top: 8px;
}`

export const BlogListEntry = (props: P<BlogListEntryProps>) => {
    const post = props.blogPost
    const [elevation, setElevation] = useState<number>(2)
    const [blurb, setBlurb] = useState<string>("")

    useLayoutEffectAsync(async () => {
        const response = await fetch(`${postBaseUrl}/${post.fileName}`)
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
                if (paragraphs.length >= 2 && !!paragraphs[1]) {
                    setBlurb(paragraphs[1])
                    blurbFound = true
                } else {
                    readData = await streamReader.read()
                }
            }
            await streamReader.cancel()
        }
    }, [])

    const raise = () => {setElevation(6)}
    const unraise = () => {setElevation(2)}

    return (<Root>
        <Card elevation={elevation} onMouseEnter={raise} onMouseLeave={unraise}
              style={{width: "80vw"}}>
            <CardContent>
                <Title href={`/blog/${post.fileName}`}>{post.title}</Title>
                <Blurb>{blurb}</Blurb>
                <Date>{post.datePublished}</Date>
            </CardContent>
        </Card>
    </Root>)
}