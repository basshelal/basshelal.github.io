import React, {PropsWithChildren, useState} from "react"
import {BlogPost} from "../../../common/BlogPost"
import {P, useLayoutEffectAsync} from "../../../common/Utils"
import styled from "styled-components"
import {API} from "../../../common/API"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import {Options} from "react-markdown/lib/ast-to-react"
import {LoadingSpinner} from "../../../common/components/LoadingSpinner"
import {Centered} from "../../home/Home"

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

const ContentContainer = styled.div`{
  width: 80vw;
  border-radius: 8px;
  box-shadow: 0 0 8px 1px #0000003F;
  padding: 24px;
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
            return (<ContentContainer>
                <Title href={`/blog/${post.fileName}`}>{post.title}</Title>
                <ReactMarkdown remarkPlugins={[remarkGfm]}
                               components={components}>
                    {blurb}
                </ReactMarkdown>
                <Date>{post.datePublished}</Date>
            </ContentContainer>)
        } else {
            return (<ContentContainer>
                <Centered><LoadingSpinner size={128}/></Centered>
            </ContentContainer>)
        }
    }

    return (<Root>
        <Content/>
    </Root>)
}