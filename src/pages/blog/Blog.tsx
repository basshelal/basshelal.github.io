import React, {useState} from "react"
import {List} from "@mui/material"
import {BlogHeader} from "./components/BlogHeader"
import {BlogFooter} from "./components/BlogFooter"
import {BlogPost} from "../../common/BlogPost"
import {baseURL, useLayoutEffectAsync} from "../../common/Utils"
import styled from "styled-components"
import {BlogListEntry} from "./components/BlogListEntry"

const manifestURL = `${baseURL}/files/blog-posts/manifest.json`

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

export const Blog = () => {

    const [blogPosts, setBlogPosts] = useState<Array<BlogPost>>([])

    useLayoutEffectAsync(async () => {
        const response = await fetch(manifestURL)
        if (response.ok) {
            const json = await response.json()
            if (!!json && Array.isArray(json)) {
                setBlogPosts(json as Array<BlogPost>)
            }
        }
    }, [])

    return (<Root>
        <BlogHeader/>
        <Content>
            <List>{blogPosts.map((blogPost) =>
                <BlogListEntry key={blogPost.title} blogPost={blogPost}/>)}
            </List>
        </Content>
        <Footer>
            <BlogFooter/>
        </Footer>
    </Root>)
}