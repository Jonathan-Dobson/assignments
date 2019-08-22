import React from 'react';
import { WithWeather } from '../WeatherProvider';


const ChangeLocation = (props) => {
    return(
        <>
            <h1>Set Location</h1>
            <button 
                className="button" 
                onClick={ ()=>{
                    props.setLocation()
                    props.history.push('/')
                } }>Automatically</button>
            <button 
                className="button">Manually set</button>
            <button 
                className="button" 
                onClick={ ()=>props.history.push('/') }>Cancel
            </button> 
        </>)
}

export default WithWeather(ChangeLocation)
