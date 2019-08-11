import React from 'react';

const custom = {
    dieSize:           80,
    spaceBetweenDice:  "5px",
    backgroundColor:   "white",
    borderRadius:      "18% 20%",
    dotSize:           "90%",
    dotColor:          "black",
}

const styles = {
    li: {
        display: "inline-block",
        margin: custom.spaceBetweenDice
    },
    die: {
        display: "grid",
        width: custom.dieSize,
        height: custom.dieSize,
        grid: "auto-flow / 1fr 1fr 1fr",
        backgroundColor: custom.backgroundColor,
        boxShadow: "-8px -8px 2px 1px black inset",
        borderRadius: custom.borderRadius,
        padding: `${custom.dieSize * 0.25}px ${custom.dieSize * 0.3}px ${custom.dieSize * 0.3}px ${custom.dieSize * 0.25}px`,
    },
    circle: {
        width: custom.dotSize,
        height: custom.dotSize,
        backgroundColor: custom.dotColor,
        borderRadius: "50%",
        alignSelf: "center",
        justifySelf: "center",
    },
}

const printDots = (...pattern) => {
    const result = new Array(9).fill(0)
    pattern.forEach((...args)=>{
        result[args[0]-1] = 1
    })
    return result
}

const patternList = {
    1: printDots(5),
    2: printDots(1,9),
    3: printDots(1,5,9),
    4: printDots(1,3,7,9),
    5: printDots(1,3,7,9,5),
    6: printDots(1,3,4,6,7,9),
    7: printDots(1,3,4,6,7,9,5),
    8: printDots(1,2,3,4,6,7,8,9),
    9: printDots(1,2,3,4,5,6,7,8,9)
}

const DiceDots = (props) => props.pattern.map((circle,i) => 
    <div key={i} style={ circle ? styles.circle : {} }></div>
)

const LiMap = (props) => props.array.map( (die,i) => {
    if(die < 1 || die > 9){
        throw new Error("VISUAL DICE ERROR. Dice array values must be integer between 1 and 9")
    }
    return(
        <li key={i} style = { styles.li }>
            <div style={styles.die}>
                <DiceDots pattern={patternList[die]} />
            </div>
        </li>
    )}
)

export default (props) => {
    if(Array.isArray(props.array)){
        return(
            <ul><LiMap array={props.array}/></ul>
        )
    }
    throw new Error("VISUAL DICE ERROR. array property must be an array when calling the VisualDice Component.")
}