import React from 'react';
import './dice.css';

// const visualDice = {
//     one: 
//     [0,0,0,
//      0,1,0,
//      0,0,0],
// }

// const DiceDots = (props) => {
//     [0,0,0,0,1,0,0,0,0].map((el,i) => {
//         return(
//             <div className={el?'circle':''}></div>
//         )
//     }
//     )
// }

// const visualOne



const Dice = (props) => props.dice.map((e,i)=><Die value={e} key={i*rand(5000)} />)

const Die = (props) => <li style={{
    display: "inline-block",
    backgroundColor: "white",
    border: "1px solid black",
    padding: 22,
    margin: 5
}}>{props.value}</li>

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
        console.log(this.state.dice);
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
                <div className='die'>

                        <div className="circle"></div>
                        <div className=""></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className=""></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className=""></div>
                        <div className="circle"></div>

                </div>
                <div className='die'>
                    {/* <DiceDots /> */}
                </div>
            </div>
        );
    }
}

export default DiceBox;
