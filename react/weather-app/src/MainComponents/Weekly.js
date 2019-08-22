import React from 'react';
import {Link} from 'react-router-dom';
import {WithWeather} from '../WeatherProvider';

const arr = [
    {high: 78, low: 77},
    {high: 77, low: 76},
    {high: 77, low: 75},
    {high: 75, low: 74},
    {high: 79, low: 73},
    {high: 78, low: 72},
    {high: 73, low: 71},
    {high: 71, low: 70},
]
     
const TempBars = ({data}) => {
    
    const {hi, lo} = data.reduce((a,v)=>(
        {
            hi: (a.hi > v.high ? a.hi : v.high),
            lo: (a.lo < v.low ? a.lo : v.low) 
        }),
        { hi: -200, lo: 200 })

    console.log(hi,lo);

    const pixelsPerDegree = 100/(hi-lo)

    console.log(pixelsPerDegree);

    return data.map(day=><span> 
        <span style={{
            height: (hi-day.high)*pixelsPerDegree,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end'

        }}>{day.high}</span>
        <span style={{
            backgroundColor: 'grey',
            height: (day.high-day.low)*pixelsPerDegree
        }}></span>
        <span style={{
        }}>{day.low}</span> 
    </span>)
}

const Weekly = (props) =>{

 return(

     <>
    <p>7 Day Forecast</p>
    <div className="summary">{props.weekSummary}</div>
{/* <div>{props.data && props.data.daily.data[0].temperatureHigh}</div>
<div>{props.data && props.data.daily.data[1].temperatureHigh}</div> */}

    <div className="weekly-container">
        
        <TempBars data={arr}/>


    </div>


    <div className="current-conditions">
        <Link to='/changeLocation' className="change-location">change location...</Link>
    </div>
    <div></div>
    <button className="button" onClick={ ()=>props.history.push('/') }>Back</button> 
    </>
     )   
}

export default WithWeather(Weekly)