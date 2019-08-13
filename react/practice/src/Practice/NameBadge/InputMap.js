import React from 'react';

export default (props) => props.inputs.map(input=>
    <input type='text'
        name={input.name}
        className={input.name}
        placeholder={input.title}
        key={input.name}
        onChange={props.changeHandler}
        value={props.inputData[input.name]}
    />)