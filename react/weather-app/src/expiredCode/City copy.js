import React from 'react';
import axios from 'axios';

export default class City extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            lat: props.coordinates.lat,
            lng: props.coordinates.lng,
            city: '',
            state: '',
            country: '',
            accuracy: ''
        }
    }
    componentDidMount(){
        const {lat, lng} = this.state
        axios.get(`http://127.0.0.1:3001/locate?lat=${lat}&lng=${lng}`)
            .then(res=>{
                console.log(res);
                const {city, state, country, accuracy} = res.data
                this.setState({
                    city,
                    state,
                    country,
                    accuracy
                })
            })
    }
    render(){
        const {city,state,country} = this.state
        return(
            <div className="location">in {city} {state}, {country}</div>
            // {/* <div className="location">in {this.state.lat}</div> */}
            
            )
        }
}