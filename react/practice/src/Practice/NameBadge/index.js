import React, {Component} from 'react';
import Badge from './Badge'
import './form.css'
import InputMap from './InputMap'

const colors = {
    red: '#EC1314',
    orange: '#FA5E11',
    yellow: '#D89C23',
    green: '#79C107',
    blue: '#32A5FA',
    teal: '#14C5D4'
}
const colorValues = Object.values(colors)


class NameBadge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputData: {},
            badges: [],
            submitReady: false
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let color = colorValues[ this.state.badges.length % colorValues.length ]
        
        this.setState(prev=>{
            let newBadge = {color: color}
            let clearInput = {}

            for(var input in prev.inputData){
                newBadge[input] = prev.inputData[input]
                clearInput[input] = ''
            }
            return {
                inputData: clearInput,
                badges: [{ ...newBadge},...prev.badges],
                submitReady: false
            }
        })
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState(prev => {
            prev.inputData[name] = name !=='phone'
                ? value
                : value.replace(/\D/gi,'')

            return {inputData: prev.inputData}
        },
        () => { 
            // When setState has completed, evaluate requirements to enable submit button
            let longEnough = true
            let inputsRequired = 7
            for(var prop in this.state.inputData){
                inputsRequired--;
                longEnough = this.state.inputData[prop].length < 3 
                    ? false
                    : longEnough
            }
            this.setState({submitReady: (
                inputsRequired <= 0
                    ? longEnough
                        ? true
                        : false
                    : false
            )})
        }
        )
    }

    inputArr = [
        { title: 'First Name', name: 'fn',},
        { title: 'Last Name',name: 'ln',},
        { title: 'Email', name: 'email',},
        { title: 'Place of Birth', name: 'birthPlace',},
        { title: 'Phone Number', name: 'phone',},
        { title: 'Favorite Food', name: 'favFood'}]

    render() {
        return (
            <div>
                <form className='form-name-badge'
                    onSubmit={this.handleSubmit}>
                    <InputMap inputs={this.inputArr} 
                        changeHandler={this.handleChange.bind(this)}
                        inputData={this.state.inputData} />
                    <textarea className="description" name='description'
                        onChange={this.handleChange}
                        value={this.state.inputData.description}
                        placeholder='Tell us about yourself' />
                    <button className='submit' disabled={!this.state.submitReady}>Submit</button>
                </form>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}>
                {this.state.badges.map((badge,index)=>
                    <Badge key={Math.floor(Math.random()*100*index)} badge={badge} />)}
                </div>
            </div>
        );
    }
}

export default NameBadge;
