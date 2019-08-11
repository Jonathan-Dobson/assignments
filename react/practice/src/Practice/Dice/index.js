import React from 'react';
import Dice from './VisualDice/VisualDice'

const rand = (max = 6) => Math.floor(0.9999 + Math.random() * max)

class DiceBox extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 8,
            dice: []
        }
    }

    roll = (e) => {
        this.setState({
            dice: new Array(this.state.count)
                .fill(0)
                .map(e => rand())
        })
    }

    render() {
        return (
            <div>
                <h1>Dice:</h1>
                {/* <p></p> */}
                <button
                    style={{
                    padding: "15px 30px",
                    fontSize: 20
                }}
                    onClick={this.roll}>Roll</button>
                <ul>
                    <Dice array={this.state.dice}/>
                </ul>
            </div>
        );
    }
}

export default DiceBox;
