import React from 'react';
import Spot from "./Spot";
import vacationSpots from './vacationSpots';

const VacationContainer = (props) => vacationSpots.map((spot,index) => 
<Spot 
    place={spot.place} 
    price={spot.price} 
    timeToGo={spot.timeToGo}
    key={index}
    />
    )

export default VacationContainer