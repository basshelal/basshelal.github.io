import * as React from "react"
import {FC} from "react"
import {List, ListItem, Typography} from "@material-ui/core"
import {P} from "../../../Utils"

const Text: FC = (props: P) => {
    return (<Typography style={{
        fontFamily: "Roboto",
        fontWeight: 400,
        fontSize: "1rem",
        padding: 0
    }}>{props.children}</Typography>)
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

export const ProjectsSection: FC = (props: P) => {
    return (
        <Section title="Projects">
            <List>
                <I>
                    <Link href="https://github.com/basshelal/Wudooh">Wudooh</Link>:
                    Published Chrome and Firefox extension that changes Arabic text appearance.
                    Used by over 1,500 users globally. Written in TypeScript
                </I>
                <I>
                    <Link href="https://github.com/basshelal/UnsplashPhotoPicker">Unsplash Photo Picker</Link>:
                    Published Android Library that allows you to quickly search Unsplash for
                    free photos with just a few lines of code. Written in Kotlin
                </I>
                <I>
                    <Link href="https://github.com/basshelal/HLS2VOD">HLS2VOD</Link>:
                    Desktop application that downloads HLS streams according to a user defined schedule.
                    Written in TypeScript using Electron and ReactJS
                </I>
                <I>
                    <Link href="https://github.com/basshelal/AnimationVectorizer">Animation Vectorizer</Link>:
                    MSc degree final project that attempts to convert raster graphics cartoon images into SVG
                    images using advanced image processing algorithms.
                </I>
                <I>
                    <Link href="https://github.com/basshelal/InstrumentDigitizer">Instrument Digitizer</Link>:
                    BSc degree final project that transforms instrument audio into full digital instruments using
                    Fourier Transform and additive synthesis. Written in Kotlin
                </I>
                <I>
                    <Link href="https://github.com/basshelal/JRtMidi">JRtMidi</Link>:
                    JVM bindings to the famous C/C++ library RtMidi which provides cross platform support for
                    sending and receiving MIDI messages. Written in Kotlin
                </I>
            </List>
        </Section>
    )
}

export const TechnicalSkillsSection: FC = (props: P) => {
    return (<Section title="Technical Skills">
            <List>
                <I>Advanced proficiency in <H>Kotlin</H> and <H>Java</H> for <H>JVM</H> and <H>
                    Android</H> Development</I>
                <I>Advanced proficiency in <H>TypeScript</H> for <H>Node.js</H> and <H>ReactJS</H> development</I>
                <I>Advanced proficiency in <H>Test Driven Development</H> methodologies</I>
                <I>Advanced proficiency in <H>Object Oriented Design</H> and principles</I>
                <I>Advanced proficiency in <H>Functional Programming</H> concepts and principles</I>
                <I>Intermediate proficiency in <H>Audio Programming</H> concepts and principles</I>
                <I>Intermediate proficiency in <H>ANSI C</H></I>
                <I>Intermediate proficiency in <H>bash</H> scripting and <H>GNU/Linux</H> concepts and principles</I>
                <I>Basic proficiency in <H>C++14</H></I>
                <I>Basic proficiency in reading <H>x86 assembly language</H></I>
                <I>Basic proficiency in <H>Python</H></I>
            </List>
        </Section>
    )
}

export const EducationSection: FC = (props: P) => {
    return (<Section title="Education">
            <List>
                <I><H>BSc. Software Engineering</H> from Swansea University in 2019: First Class with Honors</I>
                <I><H>MSc. Advanced Software Technology</H> from Swansea University in 2020: Merit</I>
                <I>Some modules taken across both courses:</I>
            </List>
            <List style={{paddingLeft: "16px", paddingRight: "16px"}}>
                <I>Software Engineering</I>
                <I>Operating Systems and Architectures</I>
                <I>Advanced Object Oriented Programming</I>
                <I>Concurrency</I>
                <I>Algorithms & Data Structures</I>
                <I>Software Testing</I>
                <I>Web Application Development</I>
                <I>Data Representation, Markup Languages and Web Services</I>
                <I>Big Data and Machine Learning</I>
                <I>Database Systems</I>
            </List>
            <Text>
                Both degrees required a written dissertation accompanied by a project, which both received a first class
                and distinction mark respectively.
            </Text>
        </Section>
    )
}

export const SoftSkillSection: FC = (props: P) => {
    return (<Section title="Soft Skills">
        <List>
            <I><H>Fast learner</H> with a strong passion for learning new things, not just in software</I>
            <I>Strong <H>teamwork</H> and <H>communication</H> skills with a passion for helping people</I>
            <I>Strong problem solving skills</I>
            <I><H>Open minded</H> and willing to try new tools and solutions</I>
            <I><H>Culturally diverse</H> from moving and traveling across continents</I>
            <I>Native fluency in <H>English</H> and <H>Arabic</H>,elementary proficiency in <H>Turkish</H></I>
        </List>
    </Section>)
}

export const InterestsSection: FC = (props: P) => {
    return (<Section title="Interests">
        <List>
            <I>I am a passionate advocate for Free (as in Freedom) software.
                I use GNU/Linux as my daily operating system.</I>
            <I>I enjoy all facets of music, especially listening to music from across the world.
                I play the keyboard in my free time.</I>
            <I>I enjoy learning about different cultures and languages in particular and
                am a regular contributor to Wiktionary in my spare time.</I>
        </List>
    </Section>)
}