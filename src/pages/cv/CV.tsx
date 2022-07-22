import * as React from "react"
import {FC} from "react"
import {Header} from "./components/Header"
import {EducationSection, InterestsSection, SoftSkillSection, TechnicalSkillsSection} from "./components/Sections"
import {Button} from "@material-ui/core"
import {PictureAsPdf} from "@material-ui/icons"

export const CV: FC = () => {
    return (<>
        <Header/>
        <TechnicalSkillsSection/>
        <SoftSkillSection/>
        <EducationSection/>
        <InterestsSection/>
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "4px"
        }}><a title="Printable PDF Version" href="res/Bassam-Helal-CV.pdf" target="_blank">
            <Button style={{color: "#880E4F"}}><PictureAsPdf style={{fontSize: "3rem"}}/></Button>
        </a>
        </div>
    </>)
}
