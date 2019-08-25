import React from 'react';
import { WithWeather } from '../../WeatherProvider';

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

export default WithWeather(City)