import React from 'react'
import Helmet from "react-helmet"
import portrait from '../images/mn.jpg'
import { Link } from "gatsby"

import layoutStyles from '../css/layout.module.scss'

require("smooth-scroll")('a[href*="#"]')

export default function Layout(props) {
    return (
        <div>
            <Helmet>
                <title>MN</title>
                <script src="https://kit.fontawesome.com/f91509e865.js" crossorigin="anonymous"></script>
                <script src="../../node_amodules/particles.js/particles.js"  type="text/javascript"></script>
            </Helmet>

            <nav className={layoutStyles.navbar}>
                <Link to="/">
                    <img src={ portrait } className={ layoutStyles.brand } alt="MN" />
                </Link>

                <ul className={ layoutStyles.links }>
                    <li>
                        <a className={"navItem"}>About</a>
                    </li>
                    <li>
                        <a className={"navItem"}>Skill</a>
                    </li>
                    <li>
                        <a className={"navItem"}>Experience</a>
                    </li>
                </ul>
                
                <ul className={ layoutStyles.external }>
                    <li>
                        <a href=""><i className="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href=""><i className="fab fa-github-square"></i></a>
                    </li>
                </ul>
            </nav>

            <div className={ layoutStyles.hero }>
                {props.children}
            </div>
        </div>
    )
}