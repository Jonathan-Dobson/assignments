import React, {Component} from 'react'
import './style.css'
import Box from './Box'

class App extends Component{
    constructor(){
        super()
        this.state = {
            boxes: ['yellow','red','black','green']
        }
    }

    handleSmallTime = () => {
        if(this.state.boxes[0] !== 'white'){
            this.setState({
                boxes: ['white','white','white','white']
            })
        }
        else{
            this.setState({
                boxes: ['black','black','black','black']
            })
        }
    }

    handleParty = () => {
        function changeToPurple(currentColors){
            const newState = {
                boxes: [
                    'purple',
                    'purple', 
                    currentColors.boxes[2],
                    currentColors.boxes[3]
                ]
            }
            return newState
        }
        this.setState(changeToPurple)
    }

    handlePro1 = () => {
        function changeToBlue(currentColors){
            const newBoxes = {
                boxes: [
                    currentColors.boxes[0],
                    currentColors.boxes[1],
                    'blue',
                    currentColors.boxes[3],
                ]
            }
            return newBoxes
        }
        this.setState(changeToBlue)
    }

    handlePro2 = () => {
       //change bottom right to blue
       // use the setstate method
       // setstate will run a function that will return the new state
       // we make that function
       const changeToBlue = (currentState) => {
           const red = 'green'
           const colors = [currentState.boxes[0], currentState.boxes[1], currentState.boxes[2], 'blue']
           const newState = {boxes: colors}
           return newState
        }
        this.setState(changeToBlue)
       // when setstate calls our function, it will pass our function
    //    the previous/current state object as its only argument

    }
    
    

    render(){
        return (
            <div className='container'>
                { 
                    Box({ num: '11', color: this.state.boxes[0]}) 
                }
                <Box num = '22' color = {this.state.boxes[1]} />
                <Box num = '33' color = {this.state.boxes[2]} />
                <Box num = '44' color = {this.state.boxes[3]} />
                
                <button 
                    onClick={this.handleSmallTime}>
                    small time dj</button>
                <button 
                    onClick={this.handleParty}
                    >Party dj</button>
                <button onClick={this.handlePro1}>pro1</button>
                <button onClick={this.handlePro2}>pro2</button>
            </div>
        )
    }
}

export default App