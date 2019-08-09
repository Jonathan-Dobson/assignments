import React from 'react';

const Spot = (props) => {
const styles = {
    display: 'inline-block',
    width: "300px",
    height: "200px",
    borderRadius: "4px",
    margin: '20px',
    boxShadow: "0px 6px 14px 4px rgba(80,80,80,0.1)"
}
    const brown = "#FADDCF", blue = "#AFB0C7", green = "#E4FDDA", white = "#FDF6F2"
    styles.backgroundColor = 
        props.timeToGo === "Fall" ? blue:
        props.timeToGo === "Summer" ? white:
        props.timeToGo === "Spring" ? green:
        brown

    const dollars = 
        props.price < 500 ? "$" :
        props.price < 1000 ? "$$":
        "$$$"

    return(
            <div style={styles}>
                <h3>
                    {props.place}
                </h3>
                <p>
                    Best Time to Go: {props.timeToGo}    
                </p>
                    Price: {dollars} {props.price}
            </div>
    )
}

export default Spot