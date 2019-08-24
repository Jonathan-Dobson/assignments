import React from 'react';
import locationDetector from './GlobalMethods/detectLocation'
import getCity from './GlobalMethods/getCityFromCoordinates'
import getWeatherFromDarkSky from './GlobalMethods/getWeatherFromDarkSky'
const {Provider, Consumer} = React.createContext()

class WeatherProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            temp: '23',
            city: null,
            state: '.',
            country: '.',
            accuracy: '',
            lat: 42.5,
            lng: -83.3,
            daySummary: 'hot today.',
            weekSummary: 'cold this week.',
            data: {
                daily: {
                    summary: "weekly summary...",
                    data: [
                        {time: 1566446400, temperatureHigh: 33, temperatureLow: 2},
                        {time: 1566546400, temperatureHigh: 35, temperatureLow: 4},
                        {time: 1566646400, temperatureHigh: 36, temperatureLow: 6},
                        {time: 1566746400, temperatureHigh: 37, temperatureLow: 8},
                        {time: 1566846400, temperatureHigh: 38, temperatureLow: 9},
                        {time: 1566946400, temperatureHigh: 39, temperatureLow: 1},
                        {time: 1566346400, temperatureHigh: 39, temperatureLow: 1},
                    ]
                }
            }
         }
    }

    componentDidMount(){
        const {lat,lng} = this.state
        getCity(lat,lng).then(res=>this.setState(res))
        this.getWeather(lat,lng)
    }

    detectLocation = () => {
        
        locationDetector()
            .then(({lat,lng})=>{
            this.setState(
                {lat,lng},
                ()=>getCity(this.state.lat,this.state.lng)
                    .then(res=>this.setState(res))
            )
        })
    }

    getWeather = (lat,lng) => {
        getWeatherFromDarkSky(lat,lng)
            .then(res=>this.setState(res))
    }

    setLocation = (location) => {
        this.setState(location, ()=>this.getWeather(this.state.lat,this.state.lng))
    }

    setCity = (city) => {
        this.setState({city: city})
    }

    render() { 
        return ( 
            <Provider value={{
                ...this.state,
                detectLocation: this.detectLocation,
                setLocation: this.setLocation,
                getWeather: this.getWeather,
                getCity: this.getCity,
                setCity: this.setCity
            }}> 
                {this.props.children}
            </Provider>
         );
    }
}
 
export default WeatherProvider;

export const WithWeather = (C) => props => <Consumer>
    {value=> <C {...value} {...props}></C>}
</Consumer>