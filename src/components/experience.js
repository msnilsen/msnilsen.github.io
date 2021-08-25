import React from 'react'

import layoutStyles from '../css/layout.module.scss'

export default function Experience(props) {
    return (
        <div style={{border: '1px solid black'}}>
            <div>
                <p>{props.title}</p>
                <p>{props.date}</p>
            </div>
            <p>{props.content}</p>
        </div>
    )
}