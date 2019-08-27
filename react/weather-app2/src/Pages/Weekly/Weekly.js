import React from 'react';
import {Link} from 'react-router-dom';
import {WithState} from '../../StateProvider';
import TempBarChart from './TempBarChart'

const Weekly = (props) =>{
    const arr = props.data && props.data.daily.data.map(day=>({
        high: day.temperatureHigh,
        low: day.temperatureLow,
        time: day.time
    }))
 return(
     <>
    <p>7 Day Forecast</p>
    <div>{props.city}, {props.state}, {props.country}</div>
    <div className="summary">{props.weekSummary}</div>
    <div className="weekly-container">
        <TempBarChart data={arr}/>
    </div>
    <div className="current-conditions">
    </div>
    <div></div>
        <Link to='/setLocation' className="change-location">change location...</Link>
    <button className="button" onClick={ ()=>props.history.push('/daily') }>Today's Weather</button> 
    </>
     )   
}

export default WithState(Weekly)