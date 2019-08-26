import React from 'react';
import { WithState } from '../../StateProvider';

const City = ({temp}) => 
    <div className="temp" style={{
        display: 'flex'
    }}>
        <span style={{
            fontSize: '180%'
        }}>
        <span>
            {temp} 
        </span>
        </span>
    &deg;F</div>

export default WithState(City)