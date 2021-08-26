import React, { useEffect } from "react"
import Helmet from "react-helmet"
import Layout from '../components/layout'
import { navigate } from '@reach/router';

import indexStyles from '../css/index.module.scss'
import Email from "../components/email";
import Skilltag from "../components/skilltag";
import Experience from "../components/experience";
import Particles from 'react-particles-js';
import Progress from 'react-circle-progress-bar'

import armyLogo from '../images/army.svg'
import sameTunesLogo from '../images/sametunes.png'
import terminalLogo from '../images/terminal.png'
import portfolioLogo from '../images/mn.jpg'
import hackGTLogo from '../images/hackGT.png'
import omnimetrixLogo from '../images/omnimetrix.png'

export default function IndexPage() {

    useEffect(() => {
        // require("../../node_modules/particles.js/particles.js")
        // const particlesJS = window.particlesJS
        // console.log(window)
        // window.particlesJS.load('particles-js', '../config/particles.json', function () {
        //     console.log('loaded particles.js');
        // });
    }); // <-- empty array means 'run once'
    const particleConfig = require("../config/particles.json")
    const percentage = 66;

    return (
        <Layout>
            <section id="home" className={indexStyles.homeSection}>
                <Particles className={indexStyles.particles} params={particleConfig} />
                <div className={indexStyles.header}>
                    <p className={indexStyles.name}>Matthew Nilsen</p>
                    <div className={indexStyles.iconContainer}>
                        <a target="_blank" href="https://www.linkedin.com/in/matthew-nilsen-dev/"><i className="fab fa-linkedin"></i></a>
                        <a target="_blank" href="https://github.com/msnilsen"><i className="fab fa-github-square"></i></a>
                    </div>
                </div>
                <div className={ indexStyles.aboutContent }>
                    <h1>Hi!</h1>
                    <hr></hr>
                    <p>I am a software engineer and web developer who loves solving unique problems using innovative techniques</p>
                </div>
                <div className={indexStyles.emailBox}>
                    <Email></Email>
                </div>
            </section>
            <section id="skills" className={indexStyles.skillsSection}>
                <div className={indexStyles.skillsSectionHeader}>
                    <h2>My Skills</h2>
                    <div>
                        <Skilltag text={'Python'}></Skilltag>
                        <Skilltag text={'Java'}></Skilltag>
                        <Skilltag text={'C'}></Skilltag>
                        <Skilltag text={'Angular'}></Skilltag>
                        <Skilltag text={'React'}></Skilltag>
                        <Skilltag text={'React Native'}></Skilltag>
                        <Skilltag text={'Kotlin'}></Skilltag>
                        <Skilltag text={'Bash'}></Skilltag>
                    </div>
                    <hr></hr>
                    <p>I have a rich background in may web frameworks, software development, software architecture, scripting, and networking, I have picked up many skills along the way and strive to keep learn more.</p>
                </div>
                <div className={indexStyles.skillbarContainer}>
                    <div id="skill_bars" className={indexStyles.skillBars}>
                        <div className={indexStyles.left}>
                            <Progress progress={90} subtitle={"Front-end Dev"}/>
                            <Progress progress={80} subtitle={"Back-end Dev"}/>
                            <Progress progress={70} subtitle={"Networking"}/>
                            <Progress progress={70} subtitle={"DevOps"}/>
                        </div>
                        <div className={indexStyles.right}>
                            <Progress progress={75} subtitle={"Software Architecture"}/>
                            <Progress progress={85} subtitle={"Cloud Services"}/>
                            <Progress progress={90} subtitle={"Scripting"}/>
                        </div>
                    </div>
                </div>
            </section>
            <section id="experience" className={indexStyles.experienceSection}>
                <div>
                    <div className={indexStyles.experienceHeader}>
                        <h2>My Experience</h2>
                        <p>Throughout my education at the Georgia Institute of Technology, I have tried to continuously increase the level of my experience so that I can become a more effective developer and engineer.</p>
                        <hr></hr>
                    </div>
                    <div className={indexStyles.experienceContainer}>
                        <Experience width={'200px'} img={sameTunesLogo} title={'SameTunes, Inc. - CTO'} content={'Compare. Create. Connect. A music-based social media platform specializing in the online comparison and discovery of music.'}></Experience>
                        <Experience width={'200px'} img={armyLogo} title={'US Department of Army'} content={'Summer and Fall intern with a Top Secret clearance. Led a scalable cloud & machine vision automation project.'}></Experience>
                        <Experience width={'200px'} img={portfolioLogo} title={'Portfolio'} content={"This website! Built using Gatsby static site generator."}></Experience>
                        <Experience width={'200px'} img={terminalLogo} title={"Terminal C1 Games"} content={'Placed top 10 individually in an AI programming game played by engineers and data scientists from top universities along the east coast.'}></Experience>
                        <Experience width={'200px'} img={omnimetrixLogo} title={'OmniMetrix LLC.'} content={'Intern developing ISO 9001 quality management system and configuring devices before shipment.'}></Experience>
                        <Experience width={'200px'} img={hackGTLogo} title={'HackGT 6'} content={'Hackathon hosted by Georgia Tech. Developed a web app using ArcGIS to highlight communities where lower income families could enjoy a higher quality of life.'}></Experience>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
