import * as React from "react"
import Layout from '../components/layout'
import portrait from '../images/mn.jpg'
import { navigate } from '@reach/router'

import aboutStyles from '../css/about.module.scss'

// markup
export default function AboutPage() {
  return (
    <Layout>
      <div className={ aboutStyles.content }>
        <img src={ portrait } className={ aboutStyles.portrait } alt="Matthew Nilsen's Portrait"/>
        <h1 className={ aboutStyles.title }>About Me</h1>
        <hr className={ aboutStyles.separator } />
        <h2> Developer with a focus on Web Technologies, Scalable Infrastructures, and Artificial Intelligence</h2>
        <p>
            I am a Junior at the Georgia Institute of Technology, studying Computer Science. I have a strong background
            in web development and love optimizing workflows, whether that means improving my coding skills, setting up
            a dual-boot laptop with a binary space partitioning window manager, automating a git environment with hooks
            to reduce the amount of time people spend reviewing pull requests, or preaching the wonders of <b>Vim</b>.
        </p>
      </div>
    </Layout>
  )
}
