import React, {Component} from 'react';
// import Badge from './Badge'
import './form.css'

class NameBadge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputData: {},
            badges: [],
            submitReady: true
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState(prev => {
            prev.inputData[name] = value
            return {inputData: prev.inputData}
        },
            () => { 
                return console.log(this.isLongEnough(value));
            }
        )

    }

    hasAllRequiredFields = (required = 5) => Object
        .keys(this.state)
        .length >= required
    isLongEnough = (str) => str.length >= 3

    render() {
        return (
            <form
                className='form-name-badge'
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}>
                <input className='fn' type="text" name='fn' 
                    placeholder='First Name'/>
                <input className='ln' type="text" name='ln' 
                    placeholder='Last Name'/>
                <input className='em' type="text" name='email' 
                    placeholder='Email'/>
                <input
                    className='birth'
                    type="text"
                    name='birthPlace'
                    placeholder='Place of Birth'/>
                <input className='ph' type="text" name='phone' 
                    placeholder='Phone'/>
                <input className='food' type="text" name='favFood' 
                    placeholder='Favorite Food'/>
                <textarea
                    className="desc"
                    name='description'
                    placeholder='Tell us about yourself'/>
                <button className='submit' disabled={!this.state.submitReady}>Submit</button>
                <div>{this.state.inputData.fn}</div>
                <div>{this.state.inputData.ln}</div>

            </form>
        );
    }
}

export default NameBadge;
