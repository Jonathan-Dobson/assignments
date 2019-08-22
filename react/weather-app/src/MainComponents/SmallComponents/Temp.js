import React from 'react';
import { WithWeather } from '../../WeatherProvider';

const City = ({temp}) => 
    <div className="temp">{temp} &deg;F</div>

export default WithWeather(City)