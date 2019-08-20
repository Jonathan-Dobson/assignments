import React from 'react';
import ReactDOM from 'react-dom';
import WeatherProvider from './WeatherProvider'
import {BrowserRouter} from 'react-router-dom'

import './index.css';
import App from './App';

ReactDOM.render(
    <WeatherProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </WeatherProvider>
, document.getElementById('root'));

