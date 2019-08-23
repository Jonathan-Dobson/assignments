import React from 'react';
import { WithWeather } from '../WeatherProvider';


const ChangeLocation = (props) => {
    return(
        <>
            <p>Set Location</p>
            <button 
                className="button" 
                onClick={ ()=>{
                    props.detectLocation()
                    props.history.push('/')
                } }>Automatically</button>
            <button 
                className="button"
                onClick={ ()=>props.history.push('/manuallySet')}>Manually set</button>
            <button 
                className="button" 
                onClick={ ()=>props.history.push('/') }>Cancel
            </button> 
        </>)
}

export default WithWeather(ChangeLocation)
