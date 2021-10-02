import * as React from "react"
import {FC} from "react"
import {List, Typography} from "@material-ui/core"
import {Item, Link, Text} from "./SmallComponents"
import {P} from "../../../Utils"

export interface SectionProps {
    sectionTitle: string
    imgSrc: string
}

export const Section: FC<SectionProps> = (props: P<SectionProps>) => {
    return (<>
        <img src={props.imgSrc} height={50} width={50} style={{display: "inline"}}/>
        <Typography variant="h2" style={{display: "inline"}}>{props.sectionTitle}</Typography>
        <hr/>
        {props.children}
    </>)
}

export const ProjectsSection: FC = (props: P) => {
    return (
        <Section sectionTitle="Projects" imgSrc="./res/images/projects.svg">
            <List>
                <Item>
                    • <Link href="https://github.com/basshelal/Waqti-Android">Waqti</Link>:
                    Published Android application for Kanban board time management similar to Trello.
                    Written in Kotlin with TDD using RxJava, ObjectBox, JUnit5, GSON and more.
                </Item>
                <Item>
                    • <Link href="https://github.com/basshelal/Wudooh">Wudooh</Link>:
                    Published Chrome and Firefox extension that clarifies any Arabic text in the
                    DOM. Written entirely in Typescript using the extension APIs.
                </Item>
                <Item>
                    • <Link href="https://github.com/basshelal/UnsplashPhotoPicker">Unsplash Photo Picker</Link>:
                    Published Android Library that allows you to quickly search Unsplash for
                    free photos with just a few lines of code.
                </Item>
                <Item>
                    • <Link href="https://github.com/basshelal/InstrumentDigitizer">Instrument Digitizer</Link>:
                    Final year university project that transforms instrument audio into
                    playable digital instruments using Fourier Transform and additive synthesis.
                </Item>
                <Item>
                    • <b>MusicBlog</b>: ASP.NET Core MVC web application for the university Web Application
                    Development module. This uses the ASP.NET Entity Framework and has security in mind.
                </Item>
                <Item>
                    • <b>Artatawe</b>: eBay-like JavaFX application for the university Software Engineering module.
                    The project was developed throughout the entire academic year in a team of 6. We
                    received high first class marks (80+) for each of the 6 iterations.
                </Item>
            </List>
        </Section>
    )
}

export const TechnicalSkillsSection: FC = (props: P) => {
    return (<Section sectionTitle="Technical Skills" imgSrc="./res/images/technical-skills.svg">
            <List>
                <Item>
                    • Advanced proficiency in Kotlin and Java for Android using tools like RxJava and MVVM
                </Item>
                <Item>
                    • Proponent of TDD with a strong ability to write functional unit tests using JUnit5
                </Item>
                <Item>
                    • Advanced proficiency in object oriented design and principles
                </Item>
                <Item>
                    • Intermediate proficiency with functional programming concepts
                </Item>
                <Item>
                    • Intermediate proficiency with TypeScript and JavaScript
                </Item>
                <Item>
                    • Intermediate proficiency with C# using ASP.NET Core MVC
                </Item>
                <Item>
                    • Intermediate proficiency with C++14
                </Item>
                <Item>
                    • Intermediate proficiency with NoSQL and SQL including Google Cloud Firebase Database
                </Item>
                <Item>
                    • Elementary proficiency with Machine Learning concepts using Python
                </Item>
                <Item>
                    • Elementary proficiency with Node.js using TypeScript and JavaScript
                </Item>
            </List>
        </Section>
    )
}

export const SoftSkillSection: FC = (props: P) => {
    return (<Section sectionTitle="Soft Skills" imgSrc="./res/images/soft-skills.svg">
        <List>
            <Item>
                • Fast learner with a strong passion for learning new things not just in software
            </Item>
            <Item>
                • Strong teamwork and communication skills with a passion for helping people
            </Item>
            <Item>
                • Culturally diverse from moving and traveling across continents
            </Item>
            <Item>
                • Member and organizer of the University Algorithms Club (Green Book Club)
            </Item>
            <Item>
                • Member and organizer of the High School Debate Club
            </Item>
            <Item>
                • Native fluency in English and Arabic, elementary proficiency in Turkish
            </Item>
            <Item>
                • Member of the British Computer Society
            </Item>
            <Item>
                • Attended leadership conferences in Europe and the United States
            </Item>
        </List>
    </Section>)
}

export const EducationSection: FC = (props: P) => {
    return (<Section sectionTitle="Education" imgSrc="./res/images/education.svg">
            <Text>
                Graduated from Swansea University in BSc. Software Engineering with a First Class degree
                with Honors classification in 2019 (full University transcript can be provided upon request).
                Some modules taken during the course:
            </Text>
            <List>
                <Item>
                    • Software Engineering (1 & 2)
                </Item>
                <Item>
                    • Data Representation, Markup Languages and Web Services
                </Item>
                <Item>
                    • Web Application Development
                </Item>
                <Item>
                    • Concurrency
                </Item>
                <Item>
                    • Algorithms
                </Item>
                <Item>
                    • Advanced Object Oriented Programming
                </Item>
                <Item>
                    • Big Data and Machine Learning
                </Item>
                <Item>
                    • Software Testing
                </Item>
                <Item>
                    • Database Systems
                </Item>
            </List>
        </Section>
    )
}

export const InterestsSection: FC = (props: P) => {
    return (<Section sectionTitle="Interests" imgSrc="./res/images/interests.svg">
        <Text>
            When I’m not building software or reading about it, I enjoy playing on the keyboard a wide
            variety of music genres, learning about different languages and cultures and trying to
            understand human behavior and psychology. I really like cats too.
        </Text>
    </Section>)
}