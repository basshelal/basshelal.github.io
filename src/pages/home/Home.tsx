import * as React from "react"
import {HTMLAttributes, PropsWithChildren} from "react"
import {GithubImage} from "./components/GithubImage"
import styled from "styled-components"
import {Button, ButtonProps, List, ListItem} from "@mui/material"
import {Link} from "react-router-dom"

export const Centered = (props: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
    return (<div style={{
        display: "flex",
        flexDirection: "row",
        alignContent: "end",
        alignItems: "center",
        justifyContent: "center",
        padding: "0px"
    }} {...props}>{props.children}</div>)
}

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

const NameHeading = styled.h1`{
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-size: clamp(3rem, -2rem + 20vw, 8rem);
  color: #880E4F;
  text-align: center;
  padding: 0;
  margin: 0;
}`

const Image = styled(GithubImage)`html {
  width: 256px;
  height: 256px;
  margin-top: 64px;
  box-shadow: 0 0 10px 5px #0000007F;
}`

const Subtitle = styled.h2`{
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 3rem;
  color: #000000;
  padding: 0;
  margin: 0;
}`

const BottomText = styled.a`{
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: clamp(1rem, 0.3rem + 2.8vw, 1.7rem);
  padding: 8px 32px;
  margin: 32px 0;
}`

export const Home = () => {

    const ImageStyle: React.CSSProperties = {
        width: "clamp(100px, 30vw, 400px)",
        height: "auto",
        marginTop: "64px",
        boxShadow: "0 0 10px 5px #0000007F"
    }

    const PageButton = (props: PropsWithChildren<ButtonProps>) => {
        return (<ListItem>
            <Button style={{
                textTransform: "none", background: "#880E4F", color: "white",
                fontFamily: "Roboto", fontWeight: 300, fontSize: "2rem", borderRadius: "16px"
            }}
                    fullWidth variant="contained" {...props}>{props.children}</Button>
        </ListItem>)
    }

    return (<Root>
        <Content>
            <Centered><GithubImage style={ImageStyle}/></Centered>
            <Centered><NameHeading>Bassam Helal</NameHeading></Centered>
            <Centered><Subtitle></Subtitle></Centered>
            <List>
                <Link to="/cv" style={{textDecoration: "none"}}><PageButton>CV</PageButton></Link>
                <Link to="/blog" style={{textDecoration: "none"}}><PageButton>Blog</PageButton></Link>
            </List>
        </Content>
        <Footer><BottomText target="_blank" href="https://github.com/basshelal/basshelal.github.io">
            View source on Github
        </BottomText></Footer>
    </Root>)
}
