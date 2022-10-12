import React, {AnchorHTMLAttributes, FC, PropsWithChildren} from "react"
import {P} from "../../../common/Utils"
import styled from "styled-components"

const NameHeading = styled.h1`{
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-size: 6rem;
  color: #880E4F;
  padding: 0;
  margin: 0;
}`

const StyledLink = styled.a`{
  margin: 8px 16px 16px 16px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 1.2rem;
}`

const Link = (props: PropsWithChildren<AnchorHTMLAttributes<any>>): React.ReactElement => {
    return (<StyledLink target="_blank" {...props}>{props.children}</StyledLink>)
}

export const CVHeader: FC = (props: P) => {
    return (<>
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "end",
            alignItems: "center",
            justifyContent: "center",
            padding: "0px"
        }}>
            <NameHeading>Bassam Helal</NameHeading>
        </div>
        <div style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "0"
        }}>
            <Link href="https://github.com/basshelal" title="Github">github.com/basshelal</Link>
            <Link href="mailto:basshelal@gmail.com" title="Email">basshelal@gmail.com</Link>
            <Link href="https://www.linkedin.com/in/bassamhelal" title="LinkedIn">linkedin.com/in/bassamhelal</Link>
        </div>
    </>)
}
