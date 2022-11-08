import React, {useState} from "react"
import {useParams} from "react-router-dom"
import styled from "styled-components"
import {BlogHeader} from "./components/BlogHeader"
import {BlogFooter} from "./components/BlogFooter"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import {useLayoutEffectAsync} from "../../common/Utils"
import {API} from "../../common/API"
import {BlogPost} from "../../common/BlogPost"
import {GlobalState} from "../../common/GlobalState"
import {Options} from "react-markdown/lib/ast-to-react"

const Root = styled.div`{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
}`

const Content = styled.div`{
  flex: 1;
}`

const Footer = styled.footer`{
  min-height: 50px;
  text-align: center;
}`

const MarkDownContainerParent = styled.div`{
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
}`

const MarkDownContainer = styled.div`{
  width: clamp(400px, 90vw, 1200px);
}`

const Title = styled.h1`{
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: clamp(2rem, -2rem + 20vw, 3rem);
  color: black;
  text-align: center;
  padding: 8px;
  margin: 8px;
}`

const TextParagraph = styled.p`{
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.75rem;
  color: black;
  padding: 4px;
  margin: 16px 8px;
  text-align: justify;
}`

const PublishedText = styled.p`{
  font-family: "Roboto Mono", monospace;
  font-weight: 400;
  font-size: 1rem;
  color: black;
  padding: 8px;
  margin: 8px;
}`

export const BlogPostView = () => {
    const {fileName} = useParams<{ fileName: string }>()
    const [fileData, setFileData] = useState<string>("")
    const [blogPost, setBlogPost] = useState<BlogPost>()
    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    useLayoutEffectAsync(async () => {
        if (!!fileName) {
            // fetch all asynchronously and independently but await them all to set isLoaded
            await Promise.all([
                GlobalState.getBlogPost(fileName).then(setBlogPost),
                API.getBlogPostText(fileName).then(setFileData)
            ])
            setIsLoaded(true)
        }
    }, [])

    const components: Options["components"] = {
        h1: (props) => <Title>{props.children}</Title>,
        p: (props) => <TextParagraph>{props.children}</TextParagraph>,
        img: (props) => <img {...props}>{props.children}</img>,
        code: (props) => <code {...props}>{props.children}</code>,
        a: (props) => <a target="_blank" {...props}>{props.children}</a>
    }

    const MarkdownContent = () => {
        if (isLoaded) {
            return (<>
                <MarkDownContainerParent>
                    <MarkDownContainer>
                        {/* TODO add these plugins:
                         https://github.com/rehypejs/rehype-highlight
                         https://github.com/rehypejs/rehype-raw
                         https://github.com/rehypejs/rehype-sanitize */}
                        <ReactMarkdown remarkPlugins={[remarkGfm]}
                                       components={components}>
                            {fileData}
                        </ReactMarkdown>
                        <PublishedText>Published on {blogPost?.datePublished}</PublishedText>
                    </MarkDownContainer>
                </MarkDownContainerParent>
            </>)
        } else {
            return (<>
                {/* TODO loading gif instead of empty, maybe even something in the case of error as well*/}
            </>)
        }
    }

    return (<Root>
        <BlogHeader href="/blog"/>
        <Content>
            <MarkdownContent/>
        </Content>
        <Footer>
            <BlogFooter/>
        </Footer>
    </Root>)
}