import React from 'react';
import PetsList from '../Pets/';
export default (props) => {
const styles = {
    display: 'inline-block',
    backgroundColor: "#F3F3F3",
    width: "300px",
    minHeight: "300px",
    borderRadius: "5px",
    margin: '20px',
    boxShadow: "0px 6px 14px 4px rgba(80,80,80,0.1)",
}
const flex = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
}
    return(
            <div style={styles}>
                <div style={flex}>
                    <h2>
                        {props.name}
                     </h2>
                    <p>
                        Age: {props.age}    
                    </p>
                </div>
                <hr />
                <h3>Pets:</h3>
                <PetsList pets={props.pets}/>
            </div>
    )
}
