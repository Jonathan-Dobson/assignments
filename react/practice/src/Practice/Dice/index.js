import React from 'react';
import './dice.css';

const printDie = (...pattern) => {
    const result = new Array(9).fill(0)
    pattern.forEach((...args)=>{
        result[args[0]-1] = 1
    })
    return result
}

const visualDice = {
    1: printDie(5),
    2: printDie(1,9),
    3: printDie(1,5,9),
    4: printDie(1,3,7,9),
    5: printDie(1,3,7,9,5),
    6: printDie(1,3,4,6,7,9),
    7: printDie(1,3,4,6,7,9,5),
    8: printDie(1,2,3,4,6,7,8,9),
    9: printDie(1,2,3,4,5,6,7,8,9),
}

const DiceDots = (props) => {
    return props.pattern.map((el,i) => {
        return(
            <div className={el?'circle':''}></div>
        )
    }
    )
}

const MakeDie = (props) => <div className='die'>
        <DiceDots pattern={visualDice[props.number]} />
    </div>

const Dice = (props) => props.dice.map((e,i)=><Die value={e} key={i*rand(5000)} />)

const Die = (props) => <li style={{
    display: "inline-block",
    margin: 5 }}>
    <MakeDie number={props.value}/></li>

const rand = (max=6) => Math.floor(0.9999 + Math.random() * max)

class DiceBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 4,
            dice: []
        }
    }

    roll = (e) => {
      this.setState({
          dice: new Array(this.state.count).fill(0).map(e=>rand())
      })
    }

    render() {
        return (
            <div>
                <h1>Dice:</h1>
                <button
                    style={{
                    padding: "15px 30px",
                    fontSize: 20
                }}
                    onClick={this.roll}
                >Roll</button>
                <ul>
                    <Dice dice={this.state.dice}/>
                </ul>              
                
                
            </div>
        );
    }
}

export default DiceBox;
