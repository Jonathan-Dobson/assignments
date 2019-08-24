import React from 'react';
import { WithWeather } from '../WeatherProvider';
import axios from 'axios'


class ManualLocation extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            search: '',
            results: []
        }
    }
    componentDidMount() {
        this.setState({search: this.props.city})
    }
    handleChange = (e) => {
        console.log('changed',e.target.value);
        this.setState({search: e.target.value}, ()=>{ 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {value} = e.target.search
        axios.get(`http://127.0.0.1:3001/search/${value}`)
        .then(res=>{
            this.setState({
                search: value,
                results: res.data.res
            })
        })
    }

    handleSave = (location) => {
        this.props.setLocation(location)
        this.props.history.push('/daily')
    }

    handleDetectRequest = () => {
        console.log('request detect location');
        this.props.detectLocation()
        this.setState({search: this.props.city})
    }

    render(){
        const matches = this.state.results.map(place=>{
            return(<div 
                key={place[1]+place[2]} 
                style={{
                    cursor: 'pointer',
                    margin: 16
                }}
                
                onClick={ (e)=>this.handleSave({
                    city: place[0],
                    state: place[4],
                    country: place[3],
                    lat: place[1],
                    lng: place[2],
                }) }>
                {place[0]}, {place[4]}, {place[3]}</div>)
        })
        return(
            <>
            <p>Set a new city</p>
            <form onSubmit={this.handleSubmit}>
            <button 
                className="button" 
                onClick={ ()=>this.handleDetectRequest() }>Detect My location</button>
            <input type="text" 
                name="search" 
                id="search" 
                placeholder='Enter City Name' 
                autoComplete='off' 
                autoFocus
                value={this.state.search} 
                onChange={this.handleChange}/>

            <div style={{
                height: 255,
                overflowY: this.state.results.length > 4 ? 'scroll' : 'hidden',
            }}>

            { matches }

            </div>
                

            <button 
                className="button" 
                >Search
            </button> 
            <button 
                className="button" 
                onClick={ ()=>this.props.history.push('/') }>Cancel
            </button> 

            </form>
        </>)
}
}

export default WithWeather(ManualLocation)
