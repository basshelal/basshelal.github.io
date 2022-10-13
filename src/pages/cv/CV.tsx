import * as React from "react"
import {CVHeader} from "./components/CVHeader"
import {EducationSection, InterestsSection, SoftSkillSection, TechnicalSkillsSection} from "./components/Sections"

export const CV = () => {
    return (<>
        <CVHeader/>
        <TechnicalSkillsSection/>
        <SoftSkillSection/>
        <EducationSection/>
        <InterestsSection/>
    </>)
}
