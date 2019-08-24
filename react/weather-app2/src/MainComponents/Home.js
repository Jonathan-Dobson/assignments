import React from 'react';
import { WithWeather } from '../WeatherProvider';


const Home = (props) => {
    return(
        <>
            <p>Home</p>

            <button 
                className="button"
                onClick={ 
                    ()=>props.history.push('/setLocation')
                }>lookup a city</button>
            <button 
                className="button" 
                onClick={ ()=>props.history.push('/daily') }>today's weather
            </button> 
            <button 
                className="button" 
                onClick={ ()=>props.history.push('/weekly') }>7-day forecast
            </button> 
        </>)
}

export default WithWeather(Home)
