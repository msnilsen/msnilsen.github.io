import React, { useEffect, useState, useRef } from "react"
import Helmet from "react-helmet"
import Layout from '../components/layout'
import { navigate } from '@reach/router';

import indexStyles from '../css/index.module.scss'
import Email from "../components/email";
import Skilltag from "../components/skilltag";
import Experience from "../components/experience";
import Particles from 'react-particles-js';
import Progress from 'react-circle-progress-bar'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import armyLogo from '../images/army.svg'
import sameTunesLogo from '../images/sametunes.png'
import terminalLogo from '../images/terminal.png'
import portfolioLogo from '../images/mn.jpg'
import hackGTLogo from '../images/hackGT.png'
import omnimetrixLogo from '../images/omnimetrix.png'
import linuxMint from '../images/linux_mint.png'

export default function IndexPage() {
    gsap.registerPlugin(ScrollTrigger);

    const noPercentages = [0, 0, 0, 0, 0, 0, 0]
    const maxPercentages = [90, 80, 70, 70, 75, 85, 95]
    const [percentages, setPercentages] = useState(noPercentages);

    const useWindowWidth = () => {
        const isBrowser = typeof window !== 'undefined'
        const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0)

        useEffect(() => {
            if (!isBrowser) return false

            const handleResize = () => setWidth(window.innerWidth)
            window.addEventListener('resize', handleResize)

            return () => {
            window.removeEventListener('resize', handleResize)
            }
        })

        return width
    }

    const particleConfig = useWindowWidth() > 600 ? require("../config/particles.json") : require("../config/particles-mobile.json")

    let skilltag_container = useRef();
    let tags = gsap.utils.selector(skilltag_container);
    let experience_container = useRef();
    let experiences = gsap.utils.selector(experience_container);

    let tl = gsap.timeline({
        delay: 0.25,
    });

    let exp_tl = gsap.timeline({
        delay: 0.25,
    });

    useEffect(() => {
        // Progress effects
        ScrollTrigger.create({
            trigger: '#skill_bars',
            start: 'top center',
            end: 'bottom center',
            onEnter: () => setPercentages(maxPercentages),
            onLeaveBack: () => setPercentages(noPercentages),
            // onUpdate: ({progress}) => updatePercentages(progress.toFixed(3)),
            // markers: true
        })

        let offset = 1000
        tags(":scope > *").forEach((tag) => {
            tl.from(tag, {
                x: offset,
                scrollTrigger: {
                    trigger: tag,
                    start: 'top bottom',
                    end: 'bottom 60%',
                    scrub: true,
                    // markers: true
                }
            })
            offset += 100
        })

        experiences(":scope > *").forEach((exp) => {
            exp_tl.from(exp, {
                scale: .05,
                scrollTrigger: {
                    trigger: exp,
                    start: 'top bottom',
                    end: 'bottom 75%',
                    scrub: true,
                    // markers: true
                }
            })
        })
    }, [])

    return (
        <Layout>
            <section id="home" className={indexStyles.homeSection}>
                <Particles className={indexStyles.particles} params={particleConfig} />
                <div className={indexStyles.header}>
                    <p className={indexStyles.name}>Matthew Nilsen</p>
                    <div className={indexStyles.iconContainer}>
                        <a style={{textDecoration: 'underline', whiteSpace: 'nowrap'}} target="_blank" href="https://github.com/msnilsen/msnilsen.github.io/tree/develop">Source Code</a>
                        <a target="_blank" href="https://www.linkedin.com/in/matthew-nilsen-dev/"><i className="fab fa-linkedin"></i></a>
                        <a target="_blank" href="https://github.com/msnilsen"><i className="fab fa-github-square"></i></a>
                    </div>
                </div>
                <div className={ indexStyles.aboutContent }>
                    <h1>Hi!<br/>I'm Matthew,<br/>Software Engineer</h1>
                    <hr></hr>
                    <p>
                        I'm from Atlanta and love solving unique problems using innovative methods.
                        I have a strong background in web development, software architecture, and
                        leadership and love to meet new people and learn new skills.
                    </p>
                </div>
                <div className={indexStyles.emailBox}>
                    <Email></Email>
                </div>
            </section>
            <section id="skills" className={indexStyles.skillsSection}>
                <div className={indexStyles.skillsSectionHeader}>
                    <h2>My Skills</h2>
                    <div id="skilltag_container" ref={skilltag_container}>
                        <Skilltag text={'Python'}></Skilltag>
                        <Skilltag text={'Java'}></Skilltag>
                        <Skilltag text={'C'}></Skilltag>
                        <Skilltag text={'Angular'}></Skilltag>
                        <Skilltag text={'React'}></Skilltag>
                        <Skilltag text={'React Native'}></Skilltag>
                        <Skilltag text={'Kotlin'}></Skilltag>
                        <Skilltag text={'Bash'}></Skilltag>
                        <Skilltag text={'Vim'}></Skilltag>
                    </div>
                    <hr></hr>
                    <p>
                        I have used a wide variety of programming languages and web frameworks
                        and am enthusiastic about getting to learn and use new technologies. I'm
                        also always looking for ways to improve my skills. Most of the experience
                        I have accumulated so far comes from personal projects, coursework, and internships.
                    </p>
                </div>
                <div className={indexStyles.skillbarContainer}>
                    <div id="skill_bars" className={indexStyles.skillBars}>
                        <div className={indexStyles.left}>
                            <Progress transitionTimingFunction={"linear"} progress={percentages[0]} subtitle={"Front-end Dev"}/>
                            <Progress transitionTimingFunction={"linear"} progress={percentages[1]} subtitle={"Back-end Dev"}/>
                            <Progress transitionTimingFunction={"linear"} progress={percentages[2]} subtitle={"Networking"}/>
                            <Progress transitionTimingFunction={"linear"} progress={percentages[3]} subtitle={"DevOps"}/>
                        </div>
                        <div className={indexStyles.right}>
                            <Progress transitionTimingFunction={"linear"} progress={percentages[4]} subtitle={"Software Architecture"}/>
                            <Progress transitionTimingFunction={"linear"} progress={percentages[5]} subtitle={"Cloud Services"}/>
                            <Progress transitionTimingFunction={"linear"} progress={percentages[6]} subtitle={"Scripting"}/>
                        </div>
                    </div>
                </div>
            </section>
            <section id="experience" className={indexStyles.experienceSection}>
                <div>
                    <div className={indexStyles.experienceHeader}>
                        <h2>My Experience</h2>
                        <p>
                            Throughout my education at the Georgia Institute of Technology,
                            I have been committed to learning and gaining as much practical
                            experience as possible to become a more effective developer and
                            engineer.
                        </p>
                        <hr></hr>
                    </div>
                    <div className={indexStyles.experienceContainer} ref={experience_container}>
                        <Experience width={'200px'} img={armyLogo} title={'US Department of Army'} content={'Summer and Fall intern with a Top Secret clearance. Led a scalable cloud & machine vision automation project.'}></Experience>
                        <Experience width={'200px'} img={sameTunesLogo} title={'SameTunes, Inc. - CTO'} content={'Compare. Create. Connect. A music-based social media platform specializing in the online comparison and discovery of music.'}></Experience>
                        <Experience width={'200px'} img={portfolioLogo} title={'Portfolio'} content={"This website! Built using Gatsby static site generator."}></Experience>
                        <Experience width={'200px'} img={linuxMint} title={'Laptop Upgrade'} content={'Upgraded windows 10 laptop to be dual-boot, also running Linux Mint XFCE. I also replaced the default window manager with BSPWM (a tiled window manager), installed a custom terminal theme with plugins, and created a custom Polybar theme.'}></Experience>
                        <Experience width={'200px'} img={terminalLogo} title={"Terminal C1 Games"} content={'Placed top 10 individually in an AI programming game played by engineers and data scientists from top universities along the east coast.'}></Experience>
                        <Experience width={'200px'} img={hackGTLogo} title={'HackGT 6'} content={'Hackathon hosted by Georgia Tech. Developed a web app using ArcGIS to highlight communities where lower income families could enjoy a higher quality of life.'}></Experience>
                        <Experience width={'200px'} img={omnimetrixLogo} title={'OmniMetrix LLC.'} content={'Intern developing ISO 9001 quality management system and configuring devices before shipment.'}></Experience>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
