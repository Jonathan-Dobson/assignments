import React from 'react';
import './App.css';
import Squares from './Components/Square/'
import data from './setState.js'
import audioMap from './soundMap'

class Table extends React.Component {
  constructor(){
    super()
    this.state = {boxes: data}
  }
  smallTime = () => {
    new Audio(audioMap.a1).play();
    this.setState(prev=>{
      const color = prev.boxes[0].color === 'white' ? 'black' : 'white'
      return prev.boxes.map(box=>{
        box.color = color
        return box
      })
    })
  }
  party = () => {
    new Audio(audioMap.a2).play();
    this.setState(prev=>{
      return prev.boxes[0].color = 'purple'
    })
    this.setState(prev=>{
      return prev.boxes[1].color = 'purple'
    })
  }
  
  professional = (select,color='blue',audio) => {
    new Audio(audio).play();
    this.setState(prev=>{
      return prev.boxes[select].color = color
    })
  }
  professionalLeft = () => this.professional(2,'blue',audioMap.a3)
  professionalRight = () => this.professional(3,'blue',audioMap.a4)
  bigTime1 = () => this.professional(0,'pink',audioMap.a5)
  bigTime2 = () => this.professional(1,'yellow',audioMap.a6)
  bigTime3 = () => this.professional(2,'green',audioMap.a7)
  bigTime4 = () => this.professional(3,'orange',audioMap.a8)


  render(){
    return(
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2,200px)",
        gridAutoRows: "100px",
        justifyContent: 'center',
      }}>
        <Squares boxes={this.state.boxes} />
        <button onClick={this.smallTime}>Small time DJ</button>
        <button onClick={this.party}>Party DJ</button>
        <button onClick={this.professionalLeft}>Professional Left</button>
        <button onClick={this.professionalRight}>Professional Right</button>
        <button onClick={this.bigTime1}>1</button>
        <button onClick={this.bigTime2}>2</button>
        <button onClick={this.bigTime3}>3</button>
        <button onClick={this.bigTime4}>4</button>
      </div>
    )
  }
}

export default () => 
  <div>
    <Table />
  </div>
