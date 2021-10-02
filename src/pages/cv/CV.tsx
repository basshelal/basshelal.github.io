import * as React from "react"
import {FC} from "react"
import {Header} from "./components/Header"
import {
    EducationSection,
    InterestsSection,
    ProjectsSection,
    SoftSkillSection,
    TechnicalSkillsSection
} from "./components/Sections"

export const CV: FC = () => {
    return (<>
        <Header/>
        <ProjectsSection/>
        <TechnicalSkillsSection/>
        <SoftSkillSection/>
        <EducationSection/>
        <InterestsSection/>
    </>)
}
