import React, { useEffect } from "react"
import Helmet from "react-helmet"
import Layout from '../components/layout'
import { navigate } from '@reach/router';

import indexStyles from '../css/index.module.scss'
import Email from "../components/email";
import Skilltag from "../components/skilltag";
import Skillbar from "../components/skillbar";
import Experience from "../components/experience";
import Particles from 'react-particles-js';
import Progress from 'react-circle-progress-bar'

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
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-github-square"></i>
                    </div>
                </div>
                <div className={ indexStyles.aboutContent }>
                    <h1>Hi!</h1>
                    <hr></hr>
                    <p>I am a software engineer and web developer who loves solving unique problems using innovative techniques</p>
                </div>
                <div className={indexStyles.emailBox}>
                    <div>
                        <p>Email:</p>
                        <Email></Email>
                    </div>
                </div>
            </section>
            <section id="skills" className={indexStyles.skillsSection}>
                <div>
                    <h2>My Skills</h2>
                    <div>
                        <Skilltag text={'Python'}></Skilltag>
                        <Skilltag text={'Python'}></Skilltag>
                        <Skilltag text={'Python'}></Skilltag>
                        <Skilltag text={'Python'}></Skilltag>
                    </div>
                    <hr></hr>
                    <p>I have a rich background in may web frameworks, software development, software architecture, scripting, and networking, I have picked up many skills along the way and strive to keep learn more.</p>
                </div>
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
            </section>
            <section id="experience">
                <h2>My Experience</h2>
                <p>Throughout my education at the Georgia Institute of Technology, I have tried to continuously increase the level of my experience so that I can become a more effective developer and engineer.</p>
                <div>
                    <Experience title={'Portfolio'} date={'2021-08-01'} content={"This is an example project that i have worked very hard on which I want to showcase to the person looking at this portfolio website for Matthew Nilsen"}></Experience>
                </div>
            </section>
        </Layout>
    )
}
