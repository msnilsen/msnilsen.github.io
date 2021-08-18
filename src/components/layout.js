import React from 'react'
import Helmet from "react-helmet"
import portrait from '../images/mn.jpg'
import { Link } from "gatsby"


import layoutStyles from '../css/layout.module.scss'

export default function Layout(props) {
    return (
        <div>
            <Helmet>
                <title>MN</title>
                <script src="https://kit.fontawesome.com/f91509e865.js" crossorigin="anonymous"></script>
            </Helmet>

            <nav>
                <Link to="/">
                    <img src={ portrait } className={ layoutStyles.brand } alt="MN" />
                </Link>

                <ul className={ layoutStyles.links }>
                    <li>
                        <Link to="/" activeClassName={ layoutStyles.active_link }>
                            <i className="fas fa-home"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" activeClassName={ layoutStyles.active_link }>
                            <i className="fas fa-info-circle"></i>
                        </Link>
                    </li>
                    <li>
                        <Link href="/skills" activeClassName={ layoutStyles.active_link }>
                            <i className="fas fa-cog"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" activeClassName={ layoutStyles.active_link }>
                            <i className="fas fa-eye"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" activeClassName={ layoutStyles.active_link }>
                            <i className="far fa-envelope-open"></i>
                        </Link>
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