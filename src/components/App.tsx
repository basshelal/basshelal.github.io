import * as React from "react"
import {FC} from "react"
import {BrowserRouter} from "react-router-dom"
import {Header} from "./Header"
import {EducationSection, InterestsSection, ProjectsSection, SoftSkillSection, TechnicalSkillsSection} from "./Sections"

export const App: FC = () => {
    return (
        <BrowserRouter>
            <Header/>
            <ProjectsSection/>
            <TechnicalSkillsSection/>
            <SoftSkillSection/>
            <EducationSection/>
            <InterestsSection/>
        </BrowserRouter>
    )
}
