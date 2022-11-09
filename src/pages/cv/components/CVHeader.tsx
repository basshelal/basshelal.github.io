import React, {AnchorHTMLAttributes, PropsWithChildren} from "react"
import styled from "styled-components"

const HeadingContainer = styled.div`{
  display: flex;
  flex-direction: row;
  align-content: end;
  align-items: center;
  justify-content: center;
  padding: 0px;
}`

const NameHeading = styled.h1`{
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-size: 6rem;
  color: #880E4F;
  padding: 0;
  margin: 0;
}`

const LinksContainer = styled.div`{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 0;
}`

const StyledLink = styled.a`{
  margin: 8px 16px 16px 16px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 1.2rem;
}`

const Link = (props: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) => {
    return (<StyledLink target="_blank" {...props}>{props.children}</StyledLink>)
}

export const CVHeader = () => {
    return (<>
        <HeadingContainer>
            <NameHeading>Bassam Helal</NameHeading>
        </HeadingContainer>
        <LinksContainer>
            <Link href="https://github.com/basshelal" title="Github">github.com/basshelal</Link>
            <Link href="mailto:basshelal@gmail.com" title="Email">basshelal@gmail.com</Link>
            <Link href="https://www.linkedin.com/in/bassamhelal" title="LinkedIn">linkedin.com/in/bassamhelal</Link>
        </LinksContainer>
    </>)
}
