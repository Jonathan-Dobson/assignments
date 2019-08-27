import React from 'react';
import {Link} from 'react-router-dom'
import {WithState} from '../../StateProvider'

export default WithState(({history}) => {
    return(
        <>
            <h4>JONATHAN DOBSON</h4>
            <h5>web developer</h5>
            <h6>about</h6>
            <h6>resume</h6>
            <h6>projects</h6>
            <h6><a href='https://github.com/fromjdobson' 
                target='_blank' rel='noopener noreferrer'>GitHub</a></h6>
            <h6><a href='https://www.linkedin.com/in/fromjon/'
                target='_blank' rel='noopener noreferrer'>LinkedIn</a></h6>
            <h6>contact</h6>

        </>)
})
