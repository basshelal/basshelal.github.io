import React from "react"
import {useParams} from "react-router-dom"
import styled from "styled-components"
import {BlogHeader} from "./components/BlogHeader"
import {BlogFooter} from "./components/BlogFooter"

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

export const BlogView = () => {
    const {fileName} = useParams<{ fileName: string }>()
    return (<Root>
        <BlogHeader/>
        <Content>
            <h1>{fileName}</h1>
        </Content>
        <Footer>
            <BlogFooter/>
        </Footer>
    </Root>)
}