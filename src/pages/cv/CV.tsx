import * as React from "react"
import {CVHeader} from "./components/CVHeader"
import {EducationSection, InterestsSection, SoftSkillSection, TechnicalSkillsSection} from "./components/Sections"
import styled from "styled-components"
import {Centered} from "../home/Home"

const PrintButton = styled.button`{
  text-transform: none;
  background: #880e4f;
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.25rem;
  border-radius: 16px;
  margin-top: 16px;
  margin-bottom: 32px;
  cursor: pointer;
  border: 0;
  box-shadow: 0 0 4px 2px #0000007F;
  padding: 16px;
  @media print {
    display: none;
  }
}`

export const CV = () => {
    return (<>
        <CVHeader/>
        <TechnicalSkillsSection/>
        <SoftSkillSection/>
        <EducationSection/>
        <InterestsSection/>
        <Centered>
            <PrintButton onClick={window.print}>
                Print/Save as PDF
            </PrintButton>
        </Centered>
    </>)
}
