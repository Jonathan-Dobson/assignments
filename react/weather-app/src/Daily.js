import React from 'react';
import City from './City';
import {WithWeather} from './WeatherProvider';
import {Link} from 'react-router-dom';


const Daily = (props) => {
return(<>
    <p>Daily Weather</p>
    <div className="summary">{props.summary}</div>
        <div className="current-conditions">
            <div className="temp">{props.temp} &deg;F</div>
            <City />
            <Link to='/changeLocation' className="change-location">change location...</Link>
        </div>
        <div></div>
    <button 
        className="week-forecast" 
        onClick={ ()=>props.history.push('/weekly')}>View 7-Day Forecast
    </button> 
</>)}

export default WithWeather(Daily)