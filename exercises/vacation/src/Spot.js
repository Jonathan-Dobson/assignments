import React from 'react';

const styles = {
    display: 'inline-block',
    backgroundColor: "white",
    width: "300px",
    height: "200px",
    borderRadius: "4px",
    margin: '20px',
    boxShadow: "0px 6px 14px 4px rgba(80,80,80,0.1)"

}

const Spot = (props) => {
    return(
            <div style={styles}>
                <h3>
                    {props.place}
                </h3>
                <p>
                    Best Time to Go: {props.timeToGo}    
                </p>
                    Price: ${props.price}
            </div>
    )
}

export default Spot