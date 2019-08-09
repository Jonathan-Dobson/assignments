import React from 'react'
import './ColoredInfoBox.css'

const ColoredInfoBox = (props) =>{
    return(
        <div className="colored-info-box">
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
            <p>{props.info}</p>
        </div>
    )
}

export default ColoredInfoBox