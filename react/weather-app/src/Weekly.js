import React from 'react';
import {Link} from 'react-router-dom';

export default (props) =><>
<p>7 Day Forecast</p>
<div className="summary">{}</div>
        <div className="current-conditions">
            <div className="temp">{} &deg;F</div>
            {/* <City /> */}
            <Link to='/changeLocation' className="change-location">change location...</Link>
        </div>
        <div></div>
<button className="week-forecast" onClick={ ()=>props.history.push('/') }>Back</button> 
</>