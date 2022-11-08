import React, {useState} from "react"
import {List} from "@mui/material"
import {BlogHeader} from "./components/BlogHeader"
import {BlogFooter} from "./components/BlogFooter"
import {BlogPost} from "../../common/BlogPost"
import {useLayoutEffectAsync} from "../../common/Utils"
import styled from "styled-components"
import {BlogListEntry} from "./components/BlogListEntry"
import {GlobalState} from "../../common/GlobalState"

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

// TODO: Dark theme is needed

export const Blog = () => {
    const [blogPosts, setBlogPosts] = useState<Array<BlogPost>>([])
    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    useLayoutEffectAsync(async () => {
        await Promise.all([
            GlobalState.getAllBlogPosts().then(setBlogPosts)
        ])
        setIsLoaded(true)
    }, [])

    const BlogPostList = () => {
        if (isLoaded) {
            return (<>
                <List>{blogPosts.map((blogPost) =>
                    <BlogListEntry key={blogPost.title} blogPost={blogPost}/>)}
                </List>
            </>)
        } else {
            return (<></>)
        }
    }

    return (<Root>
        <BlogHeader/>
        <Content>
            <BlogPostList/>
        </Content>
        <Footer>
            <BlogFooter/>
        </Footer>
    </Root>)
}