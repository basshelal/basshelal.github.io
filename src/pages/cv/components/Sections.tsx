import * as React from "react"
import {FC} from "react"
import {List, ListItem, Typography} from "@material-ui/core"
import {P} from "../../../Utils"
import {TypographyProps} from "@material-ui/core/Typography/Typography"

const Text: FC<P<TypographyProps>> = (props: P<TypographyProps>) => {
    const defaultProps: TypographyProps = {
        style: {
            fontFamily: "Roboto",
            fontWeight: 400,
            fontSize: "1rem",
            padding: 0
        }
    }
    const mergedProps: TypographyProps = {
        ...defaultProps,
        ...props
    }
    return (<Typography {...mergedProps}>{props.children}</Typography>)
}

// Item
const I: FC = (props: P) => {
    return (<ListItem style={{padding: "4px"}}>
        <Text>{props.children}</Text>
    </ListItem>)
}

const Link: FC<{ href: string }> = (props: P<{ href: string }>) => {
    return (<a href={props.href} target="_blank">{props.children}</a>)
}

// Highlight
const H: FC = (props: P) => {
    return (<Typography display="inline" style={{
        fontFamily: "Roboto",
        fontWeight: 600,
        fontSize: "1rem",
        padding: 0,
        color: "#880E4F"
    }}>{props.children}</Typography>)
}

export interface SectionProps {
    title: string
}

export const Section: FC<SectionProps> = (props: P<SectionProps>) => {
    return (<div style={{paddingLeft: "16px", paddingRight: "16px"}}>
        <Typography style={{
            fontFamily: "Roboto",
            fontWeight: 300,
            fontSize: "3rem",
            color: "#880E4F"
        }}>{props.title}</Typography>
        <hr style={{backgroundColor: "#880E4F", margin: 0}}/>
        <div style={{padding: "4px"}}>
            {props.children}
        </div>
    </div>)
}

export const TechnicalSkillsSection: FC = () => {
    return (<Section title="Technical Skills">
        <List>
            <I>Advanced proficiency in <H>ANSI C</H> for <H>Embedded Systems</H></I>
            <I>Advanced proficiency in <H>Kotlin</H> and <H>Java</H> for <H>JVM</H> development</I>
            <I>Advanced proficiency in <H>TypeScript</H> for <H>Node.js</H></I>
            <I>Intermediate proficiency in <H>Embedded Systems</H> concepts and protocols</I>
            <I>Intermediate proficiency in <H>bash</H> scripting and <H>GNU/Linux</H></I>
            <I>Intermediate proficiency in <H>Android Development</H></I>
            <I>Intermediate proficiency in <H>React.js</H></I>
            <I>Basic proficiency in <H>Assembly Language</H> (x86 and ARM)</I>
            <I>Basic proficiency in <H>(Embedded) C++</H></I>
            <br/>
            <I>Extensive experience using <H>Test Driven Development</H></I>
            <I>Extensive experience with <H>Object Oriented Design</H> and principles</I>
            <I>Extensive experience with <H>Functional Programming</H> concepts and principles</I>
            <I>Moderate experience using various embedded platforms
                such as <H>ESP32</H> and <H>Raspberry Pi Pico</H></I>
            <I>Moderate experience building and updating <H>Full-Stack Web Apps</H></I>
            <I>Moderate experience <H>contributing to Open-Source Projects</H></I>
            <I>Limited experience with <H>Project Planning and Management</H></I>
        </List>
    </Section>)
}

export const EducationSection: FC = () => {
    return (<Section title="Education">
        <List>
            <I><H>BSc. Software Engineering</H> from Swansea University in 2019: <b>First Class with Honors</b></I>
            <I><H>MSc. Advanced Software Technology</H> from Swansea University in 2020: <b>Merit</b></I>
            <I>
                Both degrees required a project with a written dissertation, which both received <H>First Class</H> (BSc)
                and <H>Distinction</H> (MSc) marks.
            </I>
            <I>Some modules taken across both courses:</I>
        </List>
        <List style={{paddingLeft: "16px", paddingRight: "16px", paddingTop: "0px"}}>
            <I>Software Engineering</I>
            <I>Operating Systems and Architectures</I>
            <I>Advanced Object Oriented Programming</I>
            <I>Algorithms & Data Structures</I>
            <I>Concurrency</I>
            <I>Software Testing</I>
            <I>Web Application Development</I>
        </List>
    </Section>)
}

export const SoftSkillSection: FC = () => {
    return (<Section title="Soft Skills">
        <List>
            <I>Strong drive and enthusiasm for high quality, <H>scalable and maintainable software</H></I>
            <I><H>Fast learner</H> with a deep passion for learning new things, not just in software</I>
            <I>Adeptness in <H>project planning and management</H></I>
            <I>Effective <H>teamwork</H> and <H>communication</H> skills</I>
            <I><H>Flexible and adaptable</H> to changing project requirements</I>
            <I><H>Open-mindedness</H> and willingness to explore new ideas and solutions</I>
            <I><H>Culturally diverse</H> from frequent moving across continents during youth</I>
            <I>Native fluency in <H>English</H> and <H>Arabic</H>, basic proficiency
                in <H>Turkish</H> and <H>Persian</H></I>
        </List>
    </Section>)
}

export const InterestsSection: FC = () => {
    return (<Section title="Interests">
        <List>
            <I>I am a passionate advocate for Free (as in Freedom) software.
                I use GNU/Linux as my daily operating system.</I>
            <I>I enjoy exploring and listening to a wide range of music from across the world.
                I play the keyboard and qanun in my free time.</I>
            <I>I enjoy linguistics and learning about different languages,
                I am a regular contributor to Wiktionary in my spare time.</I>
        </List>
    </Section>)
}