import React from 'react';
import City from './City';
import Temp from './Temp';
import {WithState} from '../../StateProvider';
import {Link} from 'react-router-dom';


const Daily = (props) => {

return(<>
    <p>Today</p>
    <div className="summary">{props.daySummary}</div>
    <div className="current-conditions">
        <Temp />
        <City />
    </div>
    <Link to='/setLocation' className="change-location">change location...</Link>
    <div></div>
    <button 
        className="button" 
        onClick={ ()=>props.history.push('/weekly')}>7-Day Forecast
    </button> 
</>)}

export default WithState(Daily)