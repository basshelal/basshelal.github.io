import * as React from "react"
import {FC} from "react"
import {SimpleHeader} from "./components/SimpleHeader"
import {EducationSection, InterestsSection, SoftSkillSection, TechnicalSkillsSection} from "./components/Sections"

export const CV: FC = () => {
    return (<>
        <SimpleHeader/>
        <TechnicalSkillsSection/>
        <SoftSkillSection/>
        <EducationSection/>
        <InterestsSection/>
    </>)
}
