import React from 'react';
import {Link} from 'react-router-dom'
import {WithState} from '../../StateProvider'

export default WithState(({results, announce}) => results.map(place=>
<Link to='/daily' 
        key={place[1]+place[2]} 
        style={{
            cursor: 'pointer',
            margin: 16,
            display: 'block'
        }}
        
        onClick={ ()=>{
            announce('USER SELECTED NEW LOCATION',{
                city: place[0],
                state: place[4],
                country: place[3],
                lat: place[1],
                lng: place[2],
            })
        } 
        }>
        {place[0]}, {place[4]}, {place[3]}</Link>
))