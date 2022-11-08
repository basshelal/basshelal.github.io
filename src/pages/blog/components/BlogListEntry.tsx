import React, {useState} from "react"
import {BlogPost} from "../../../common/BlogPost"
import {P, useLayoutEffectAsync} from "../../../common/Utils"
import {Card, CardContent} from "@mui/material"
import styled from "styled-components"
import {API} from "../../../common/API"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import {Options} from "react-markdown/lib/ast-to-react"

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

const TextParagraph = styled.p`{
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: black;
  margin: 8px;
  padding: 2px;
  text-align: justify;
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
    const [blurb, setBlurb] = useState<string>("")
    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    useLayoutEffectAsync(async () => {
        await Promise.all([
            API.getBlogPostBlurb(post.fileName).then(setBlurb)
        ])
        setIsLoaded(true)
    }, [])

    const components: Options["components"] = {
        h1: (props) => <Title></Title>,
        p: (props) => <TextParagraph>{props.children}</TextParagraph>,
        img: (props) => <img></img>,
        code: (props) => <code {...props}>{props.children}</code>,
        a: (props) => <a target="_blank" {...props}>{props.children}</a>
    }

    const Content = () => {
        if (isLoaded) {
            return (<>
                <Title href={`/blog/${post.fileName}`}>{post.title}</Title>
                <ReactMarkdown remarkPlugins={[remarkGfm]}
                               components={components}>
                    {blurb}
                </ReactMarkdown>
                <Date>{post.datePublished}</Date>
            </>)
        } else {
            return (<>
                {/* TODO loading gif instead of empty, maybe even something in the case of error as well*/}
            </>)
        }
    }

    return (<Root>
        <Card elevation={2} style={{width: "80vw"}}>
            <CardContent>
                <Content/>
            </CardContent>
        </Card>
    </Root>)
}