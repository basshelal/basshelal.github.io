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
  width: 90vw;
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
  padding: 8px;
  margin: 8px;
}`

export const BlogView = () => {
    const {fileName} = useParams<{ fileName: string }>()
    const [fileData, setFileData] = useState<string>("")
    const [blogPost, setBlogPost] = useState<BlogPost>()

    useLayoutEffectAsync(async () => {
        if (!!fileName) {
            setBlogPost(await GlobalState.getBlogPost(fileName))
            setFileData(await API.getBlogPostText(fileName))
        }
    }, [])

    const components: Options["components"] = {
        h1: (props) => <Title>{props.children}</Title>,
        p: (props) => <TextParagraph>{props.children}</TextParagraph>,
        img: (props) => <img {...props}>{props.children}</img>,
        code: (props) => <code {...props}>{props.children}</code>,
        a: (props) => <a target="_blank" {...props}>{props.children}</a>
    }

    return (<Root>
        <BlogHeader/>
        <Content>
            <MarkDownContainerParent>
                <MarkDownContainer>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}
                                   components={components}>
                        {fileData}
                    </ReactMarkdown>
                </MarkDownContainer>
            </MarkDownContainerParent>
        </Content>
        <Footer>
            <BlogFooter/>
        </Footer>
    </Root>)
}