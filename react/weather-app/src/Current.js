import React, {Component}from 'react';
import axios from 'axios'
// import {darkSkyKey} from './config'

class CurrentConditions extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            temp: null,
            location: '',
            summary: null,
            coordinates: {
                latitude: 40.769357,
                longitude: -111.885344
            }
         }
    }

    // componentDidMount(){
    //     const {latitude,longitude} = this.state.coordinates
    //     axios.get(`https://vschool-cors.herokuapp.com?url=https://api.darksky.net/forecast/${darkSkyKey}/${latitude},${longitude}`)
    //         .then(res=>{
    //             console.log(res)
    //             if(res.status===200){

    //                 this.setState({
    //                     temp: parseInt(res.data.currently.temperature),
    //                     summary: res.data.hourly.summary
    //                 })
    //             }else{
    //                 console.log('API fetch error')
    //             }
    //         })
    // }

    componentDidMount(){
        this.getCityName()
    }
    getCityName(){
        axios.get('http://127.0.0.1:3001/locate?lat=40.769357&lng=-111.885344')
            .then(res=>{
                console.log(res);
                this.setState({location: res.data})
            })
    }

    render() { 
        return ( 
            <>
            <div className="summary">{this.state.summary}</div>
            <div className="current-conditions">
                <div className="temp">{this.state.temp} &deg;F</div>
                <div className="location">in {this.state.location}</div>
                <div className="change-location">change location...</div>
            </div>
            <div></div>
            <button className="week-forecast">View 7-Day Forecast</button> 
            </>
         );
    }
}
 
export default CurrentConditions;