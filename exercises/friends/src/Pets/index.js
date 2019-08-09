import React from 'react';
import Pet from './Pet';

const styles = {
    margin: '12px',
}

export default (props) => props.pets.map((pet,index)=><Pet 
        style={styles}
        name={pet.name} 
        breed={pet.breed} 
        key={index+pet.name}
    />)