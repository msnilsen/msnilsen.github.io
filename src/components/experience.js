import React from 'react'

import experienceStyles from '../css/experience.module.scss'

export default function Experience(props) {
    const optionalContainerStyles={
        width: props.width,
        height: props.height
    }

    const imgWidth = props.imgWidth ? props.imgWidth : '100%'
    return (
        <div className={experienceStyles.experienceContainer} style={optionalContainerStyles}>
            <h6>{props.title}</h6>
            <p>{props.content}</p>
            <img src={props.img} width={imgWidth}></img>
        </div>
    )
}