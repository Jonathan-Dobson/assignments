import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
        <div className="summary">Rain starting later this afternoon, continuing until this evening.</div>
        <div className="current-conditions">
            <div className="temp">78 &deg;F</div>
            <div className="location">in Salt Lake City</div>
            <div className="change-location">change location...</div>
        </div>
        <div></div>
        <button className="week-forecast">View 7-Day Forecast</button>      

    </div>
  );
}

export default App;
