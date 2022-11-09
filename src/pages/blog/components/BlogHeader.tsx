import React, {PropsWithChildren} from "react"
import styled from "styled-components"

const Root = styled.div`{
  background-color: #880e4f;
  width: 100vw;
  box-shadow: 0 0 16px 1px #0000007F;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}`

const Title = styled.h1`{
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  color: white;
  text-align: center;
  padding: 8px;
  margin: 8px;
}`

const Link = styled.a`{
  text-transform: none;
  text-decoration: none;
  color: white;
}`

export const BlogHeader = (props: PropsWithChildren<{ href?: string }>) => {
    // TODO: Standardized font-size clamp values, (at least min and max viewport values so scalability moves equally)
    //  use this: https://clamp.font-size.app/
    return (<Root>
        <Title><Link href={props.href}>Bassam Helal's Blog</Link></Title>
    </Root>)
}