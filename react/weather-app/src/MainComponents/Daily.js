import React from 'react';
import City from './SmallComponents/City';
import Temp from './SmallComponents/Temp';
import {WithWeather} from '../WeatherProvider';
import {Link} from 'react-router-dom';


const Daily = (props) => {

return(<>
    <p>Today</p>
    <div className="summary">{props.daySummary}</div>
    <div className="current-conditions">
        <Temp />
        <City />
    </div>
    <Link to='/changeLocation' className="change-location">change location...</Link>
    <div></div>
    <button 
        className="button" 
        onClick={ ()=>props.history.push('/weekly')}>View 7-Day Forecast
    </button> 
</>)}

export default WithWeather(Daily)