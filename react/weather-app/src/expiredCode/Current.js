import React, {Component}from 'react';
import axios from 'axios'
import {darkSkyKey} from './config'
import City from './City'

const AppContext = React.createContext()

class CurrentConditions extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            temp: null,
            city: '',
            state: '',
            country: '',
            accuracy: '',
            summary: null,
            coordinates: {
                lat: 42.5,
                lng: -83.3
            }
         }
    }

    componentDidMount(){
        // this.getCityFromCoordinates()
        // const {latitude,longitude} = this.state.coordinates
        // axios.get(`https://vschool-cors.herokuapp.com?url=https://api.darksky.net/forecast/${darkSkyKey}/${latitude},${longitude}`)
        //     .then(res=>{
        //         console.log(res)
        //         if(res.status===200){

        //             this.setState({
        //                 temp: parseInt(res.data.currently.temperature),
        //                 summary: res.data.hourly.summary
        //             })
        //         }else{
        //             console.log('API fetch error')
        //         }
        //     })
    }

    // getCityFromCoordinates(){
    //     const {latitude, longitude} = this.state.coordinates
    //     axios.get(`http://127.0.0.1:3001/locate?lat=${latitude}&lng=${longitude}`)
    //         .then(res=>{
    //             console.log(res);
    //             const {city, state, country, accuracy} = res.data
    //             this.setState({
    //                 city,
    //                 state,
    //                 country,
    //                 accuracy
    //             })
    //         })
    // }

    render() { 
        const {city,state,country,temp,summary} = this.state
        return ( 
            <AppContext.Provider value={this.state}>
            <div className="summary">{summary}</div>
            <div className="current-conditions">
                <div className="temp">{temp} &deg;F</div>
                {/* <div className="location">in {city} {state}, {country}</div> */}
                <City coordinates={this.state.coordinates} />
                <div className="change-location">change location...</div>
            </div>
            <div></div>
            <button className="week-forecast">View 7-Day Forecast</button> 
            </AppContext.Provider>
         );
    }
}
 
export default CurrentConditions;