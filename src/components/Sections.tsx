import * as React from "react"
import {FC} from "react"
import {List, ListItem, Typography} from "@material-ui/core"
import {Link} from "./SmallComponents"

export interface SectionProps {
    imgSrc: string
    sectionTitle: string
}

export const Section: FC<SectionProps> = (props) => {
    return (<>
        <img src={props.imgSrc} height={50} width={50} style={{display: "inline"}}/>
        <Typography variant="h2" style={{display: "inline"}}>{props.sectionTitle}</Typography>
        <hr/>
        {props.children}
    </>)
}

export const ProjectsSection: FC = () => {
    return (
        <Section imgSrc="./res/images/projects.svg" sectionTitle="Projects">
            <List>
                <ListItem>
                    <div>
                        • <Link href="https://github.com/basshelal/Waqti-Android">Waqti</Link>:
                        Published Android application for Kanban board time management similar to Trello.
                        Written in Kotlin with TDD using RxJava, ObjectBox, JUnit5, GSON and more.
                    </div>
                </ListItem>
                <ListItem>
                    <div>
                        • <Link href="https://github.com/basshelal/Wudooh">Wudooh</Link>:
                        Published Chrome and Firefox extension that clarifies any Arabic text in the
                        DOM. Written entirely in Typescript using the extension APIs.
                    </div>
                </ListItem>
                <ListItem>
                    <div>
                        • <Link href="https://github.com/basshelal/UnsplashPhotoPicker">Unsplash Photo Picker</Link>:
                        Published Android Library that allows you to quickly search Unsplash for
                        free photos with just a few lines of code.
                    </div>
                </ListItem>
                <ListItem>
                    <div>
                        • <Link href="https://github.com/basshelal/InstrumentDigitizer">Instrument Digitizer</Link>:
                        Final year university project that transforms instrument audio into
                        playable digital instruments using Fourier Transform and additive synthesis.
                    </div>
                </ListItem>
                <ListItem>
                    <div>
                        • <b>MusicBlog</b>: ASP.NET Core MVC web application for the university Web Application
                        Development module. This uses the ASP.NET Entity Framework and has security in mind.
                    </div>
                </ListItem>
                <ListItem>
                    <div>
                        • <b>Artatawe</b>: eBay-like JavaFX application for the university Software Engineering module.
                        The project was developed throughout the entire academic year in a team of 6. We
                        received high first class marks (80+) for each of the 6 iterations.
                    </div>
                </ListItem>
            </List>
        </Section>
    )
}