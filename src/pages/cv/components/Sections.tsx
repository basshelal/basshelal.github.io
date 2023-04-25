import * as React from "react"
import {PropsWithChildren} from "react"
import styled from "styled-components"

const Text = styled.div`{
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  padding: 0;
}`

const I = styled(Text)`{
  padding: 6px;
}`

const H = styled(Text)`{
  display: inline;
  color: #880E4F;
  font-weight: 600;
  padding: 0;
}`

const SectionContainer = styled.div`{
  padding-left: 16px;
  padding-right: 16px;
}`

const SectionTitle = styled(Text)`{
  font-size: 3rem;
  font-weight: 300;
  color: #880E4F;
  margin: 8px 0;
}`

const SectionHorizontalRule = styled.hr`{
  background-color: #880E4F;
  color: #880E4F;
  margin: 0;
  width: 100%;
  height: 0px;
}`

const SectionContent = styled.div`{
  padding: 4px;
}`

export interface SectionProps {
    title: string
}

export const Section = (props: PropsWithChildren<SectionProps>) => {
    return (<SectionContainer>
        <SectionTitle>{props.title}</SectionTitle>
        <SectionHorizontalRule/>
        <SectionContent>{props.children}</SectionContent>
    </SectionContainer>)
}

export const TechnicalSkillsSection = () => {
    return (<Section title="Technical Skills">
        <I>Advanced proficiency in <H>C</H> for <H>Embedded Systems</H> and <H>Systems Programming</H></I>
        <I>Advanced proficiency in <H>Kotlin</H> and <H>Java</H> for <H>JVM</H> development</I>
        <I>Advanced proficiency in <H>TypeScript</H> for <H>Node.js</H></I>
        <I>Intermediate proficiency in <H>Embedded Systems</H> concepts and protocols</I>
        <I>Intermediate proficiency in <H>bash</H> scripting and <H>GNU/Linux</H></I>
        <I>Intermediate proficiency in <H>Android Development</H> using <H>Kotlin</H></I>
        <I>Intermediate proficiency in <H>React.js</H> using <H>TypeScript</H></I>
        <I>Basic proficiency in reading <H>Assembly Language</H> (x86 and ARM)</I>
        <I>Basic proficiency in <H>(Embedded) C++</H></I>
        <br/>
        <I>Extensive experience using <H>Test Driven Development</H></I>
        <I>Extensive experience with <H>Object Oriented Design</H> and principles</I>
        <I>Extensive experience with <H>Functional Programming</H> concepts and principles</I>
        <I>Moderate experience using various embedded platforms
            such as <H>ESP32</H> and <H>Raspberry Pi Pico</H></I>
        <I>Moderate experience building and maintaining <H>Full-Stack Web Apps</H></I>
        <I>Moderate experience <H>contributing to Open-Source Projects</H></I>
        <I>Limited experience with <H>Project Planning and Management</H></I>
    </Section>)
}

export const EducationSection = () => {
    return (<Section title="Education">
        <I><H>BSc. Software Engineering</H> from Swansea University in 2019: <b>First Class with Honors</b></I>
        <I><H>MSc. Advanced Software Technology</H> from Swansea University in 2020: <b>Merit</b></I>
        <I>
            Both degrees required a project with a written dissertation, which both received <H>First
            Class</H> (BSc)
            and <H>Distinction</H> (MSc) marks.
        </I>
        <I>Some modules taken across both courses:</I>
        <div style={{paddingLeft: "16px", paddingRight: "16px", paddingTop: "0px"}}>
            <I>Software Engineering</I>
            <I>Operating Systems and Architectures</I>
            <I>Advanced Object Oriented Programming</I>
            <I>Algorithms & Data Structures</I>
            <I>Declarative & Functional Programming</I>
            <I>Concurrency</I>
            <I>Software Testing</I>
            <I>Web Application Development</I>
        </div>
    </Section>)
}

export const SoftSkillSection = () => {
    return (<Section title="Soft Skills">
        <I>Strong drive to build <H>scalable and maintainable software</H></I>
        <I><H>Passion for learning</H> new things, not just in software</I>
        <I>Effective <H>teamwork and communication</H> skills</I>
        <I><H>Strong presentation skills</H> even for complex technical concepts</I>
        <I><H>Adaptability and flexibility</H> to changing project requirements</I>
        <I><H>Open-mindedness</H> and willingness to explore novel solutions and ideas</I>
        <I>Strong proficiency in <H>reading and writing documents</H></I>
        <I>Native fluency in <H>English</H> and <H>Arabic</H>, learner proficiency
            in literary <H>Persian</H> and <H>Turkish</H></I>
    </Section>)
}

export const InterestsSection = () => {
    return (<Section title="Interests">
        <I>I am a passionate advocate for Free (as in Freedom) software,
            I use GNU/Linux as my daily operating system.</I>
        <I>I enjoy exploring and listening to a wide range of music from across the world.
            I play the keyboard and Qanun in my free time.</I>
        <I>I enjoy linguistics and learning about different languages,
            I am currently learning Classical Persian and am a regular contributor to Wiktionary in my spare time.</I>
    </Section>)
}