import React from 'react'

import layoutStyles from '../css/layout.module.scss'

export default function Skillbar(props) {
    return (
        <div>
            <div>
                <p>{props.title}</p>
                <p>{props.percentage}</p>
            </div>
            <div style={{width: '100px', height: '10px', backgroundColor: 'black'}}></div>
        </div>
    )
}