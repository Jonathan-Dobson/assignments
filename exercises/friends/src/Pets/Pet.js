import React from 'react';

export default (pet) => 
    <div style={pet.style}>
        <span>
            One {pet.breed}
        </span> 
        &nbsp;
        <span> 
            named {pet.name}. 
        </span> 
    </div>