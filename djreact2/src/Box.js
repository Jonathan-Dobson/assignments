import React from 'react';

const Box = (props) => 
    <div className="box"
        style={{backgroundColor: props.color}}
    >{props.num}</div>

export default Box