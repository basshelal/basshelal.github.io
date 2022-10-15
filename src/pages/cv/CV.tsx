import * as React from "react"
import {CVHeader} from "./components/CVHeader"
import {EducationSection, InterestsSection, SoftSkillSection, TechnicalSkillsSection} from "./components/Sections"
import styled from "styled-components"
import {Button} from "@mui/material"
import {Centered} from "../home/Home"

const Root = styled.div`@media print {
  .printHidden {
    display: none;
  }
}`

export const CV = () => {
    return (<Root>
        <CVHeader/>
        <TechnicalSkillsSection/>
        <SoftSkillSection/>
        <EducationSection/>
        <InterestsSection/>
        <Centered>
            <Button className="printHidden" onClick={window.print}
                    style={{
                        textTransform: "none", background: "#880E4F", color: "white",
                        fontFamily: "Roboto", fontWeight: 400, fontSize: "1rem",
                        marginTop: "16px", marginBottom: "32px", borderRadius: "16px"
                    }}>
                Print/Save as PDF</Button>
        </Centered>
    </Root>)
}
