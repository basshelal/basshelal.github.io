import * as React from "react"
import {PropsWithChildren} from "react"
import {GithubImage} from "./components/GithubImage"
import styled from "styled-components"
import {Link} from "react-router-dom"

export const Centered = styled.div`{
  display: flex;
  flex-direction: row;
  align-content: end;
  align-items: center;
  justify-content: center;
  padding: 0px;
}`

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

const Avatar = styled(GithubImage)`{
  width: clamp(100px, 30vw, 400px);
  height: auto;
  margin-top: 64px;
  box-shadow: 0 0 10px 5px #0000007F;
  border-radius: clamp(100px, 30vw, 400px);
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

const ButtonContainer = styled.div`{
  display: flex;
  flex-direction: row;
  align-content: end;
  align-items: center;
  justify-content: center;
  margin: 12px;
}`

const Button = styled.button`{
  text-transform: none;
  background: #880e4f;
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: clamp(2rem, 1.75rem + 1vw, 2.5rem);
  border-radius: 16px;
  cursor: pointer;
  width: 90vw;
  border: 0;
  box-shadow: 0 0 4px 2px #0000007F;
  padding: 12px;
}`

export const Home = () => {

    const PageButton = (props: PropsWithChildren<{ to: string, text: string }>) => {
        return (<ButtonContainer>
            <Link to={props.to}>
                <Button{...props} title={`Go to ${props.text}`}>{props.text}</Button>
            </Link>
        </ButtonContainer>)
    }

    return (<Root>
        <Content>
            <Centered><Avatar/></Centered>
            <Centered><NameHeading>Bassam Helal</NameHeading></Centered>
            <PageButton to="/cv" text="CV"/>
            <PageButton to="/blog" text="Blog"/>
        </Content>
        <Footer><BottomText target="_blank" href="https://github.com/basshelal/basshelal.github.io">
            View source on Github
        </BottomText></Footer>
    </Root>)
}
