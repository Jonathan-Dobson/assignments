import React from 'react';
import {WithState} from '../../StateProvider'
import LoadingModal from './LoadingModal'

export default WithState(({announce, history, disableButtons, loadingWeatherModal, city, state, country}) => {
    return(
        <>
            <p>Home</p>
            {loadingWeatherModal ? <LoadingModal /> :''}
            <p className='alert-success'>{city} {state} {country}</p>
            <button disabled={disableButtons ? 'disabled' : ''}
                className="button" onClick={ 
                    () => announce('CLICKED NAVIGATE TO TODAYS WEATHER', {history})
                }>today's weather
            </button> 
            <button disabled={disableButtons ? 'disabled' : ''}
                className="button" onClick={ 
                    () => announce('CLICKED NAVIGATE TO 7 DAY FORECAST', {history})
                }>7-day forecast
            </button> 
            <button 
                className="button" onClick={ 
                    () => announce('CLICKED NAVIGATE TO SET LOCATION', {history})
                }>lookup a city</button>
        </>)
})
