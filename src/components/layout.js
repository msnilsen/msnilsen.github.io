import React from 'react'
import Helmet from "react-helmet"
import portrait from '../images/mn.jpg'
import { Link } from "gatsby"

import layoutStyles from '../css/layout.module.scss'
import Scrollspy from 'react-scrollspy'
import '../css/globalStyles.scss'

// require("smooth-scroll")('a[href*="#"]')

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

                <Scrollspy className={layoutStyles.links} style={layoutStyles.scrollspy} items={ ['home', 'skills', 'experience'] } currentClassName={"active_link"}>
                    <li><a className={layoutStyles.navItem} href="#home">Home</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#experience">Experience</a></li>
                </Scrollspy>
                
                <div></div>
            </nav>

            <div className={ layoutStyles.hero }>
                {props.children}
            </div>
        </div>
    )
}