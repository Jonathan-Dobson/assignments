import React from 'react';
import { WithWeather } from '../../WeatherProvider';

const City = ({city,state,country}) => 
    <div className="location"> {city} {state}, {country}</div>

export default WithWeather(City)