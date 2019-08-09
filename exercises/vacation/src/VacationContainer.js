import React from 'react';
import Spot from "./Spot";
import vacationSpots from './vacationSpots';

export default () => vacationSpots.map((spot,index) => 
<Spot 
    place={spot.place} 
    price={spot.price} 
    timeToGo={spot.timeToGo}
    key={index}
    />)
