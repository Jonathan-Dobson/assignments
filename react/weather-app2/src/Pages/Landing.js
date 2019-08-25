import React from 'react';
import {WithState} from '../StateProvider'
import Display from './LandingComponents/Display'

export default WithState(({announce}) => <div>
    <p>Home</p>
    <Display />
    <button onClick={()=>announce('BUTTON 1 CLICKED')}>1</button>
    <button onClick={()=>announce('BUTTON 2 CLICKED')}>2</button>
    <button onClick={()=>announce('BUTTON 3 CLICKED')}>3</button>

</div>)