import React from 'react';

export default (props) => <>
    <p>Change Location</p>
    <div className="summary">{}</div>
        <div className="current-conditions">
        </div>
    <button 
        className="week-forecast" 
        onClick={ ()=>props.history.push('/') }>Cancel
    </button> 
</>