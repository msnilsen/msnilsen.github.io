import React from 'react'

import skilltagStyles from '../css/skilltag.module.scss'

export default function Skilltag(props) {
    return (
        <div className={skilltagStyles.skilltag}>
            <p>{props.text}</p>
        </div>
    )
}