import React from 'react';
import { WithState } from '../../StateProvider';

const City = ({city,state,country}) => 
    <div className="location"> {city} {state}, {country}</div>

export default WithState(City)