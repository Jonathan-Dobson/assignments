import React from 'react';
import ReactDOM from 'react-dom';
import StateProvider from './StateProvider'
import {BrowserRouter} from 'react-router-dom'
import './mustard-ui.min.css'
import './index.css';
import App from './App';


ReactDOM.render(
    <StateProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StateProvider>
, document.getElementById('root'));

