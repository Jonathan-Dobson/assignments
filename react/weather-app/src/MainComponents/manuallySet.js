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

    handleSubmit = (e) => {
        e.preventDefault()
        const {value} = e.target.search
        console.log(value);

        axios.get(`http://127.0.0.1:3001/search/${value}`)
        .then(res=>{
            
            console.log(res.data.res)
            this.setState({
                search: value,
                results: res.data.res
            })
        })
    }

    handleSave = (location) => {
        this.props.setLocation(location)
        this.props.history.push('/')
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
            <p>Manually Set Location</p>
            <form onSubmit={this.handleSubmit}>
            <input type="text" name="search" id="search" placeholder='Search Location' autoComplete='off' autoFocus/>

            <div style={{
                height: 255,

                overflowY: 'scroll',
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
