import React from 'react';
import detectLocation from './GlobalMethods/detectLocation'
import getCity from './GlobalMethods/getCityFromCoordinates'
// import getWeather from './GlobalMethods/getWeatherFromDarkSky'
const {Provider, Consumer} = React.createContext()

class WeatherProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            temp: '55',
            city: '.',
            state: '.',
            country: '.',
            accuracy: '',
            lat: 42.5,
            lng: -83.3,
            daySummary: '.',
            weekSummary: '.',
            forecast: {
                day1: {highTemp:77},
                day2: {highTemp:76},
                day3: {highTemp:75},
                day4: {highTemp:74},
                day5: {highTemp:73},
                day6: {highTemp:72},
                day7: {highTemp:71},
                day8: {highTemp:70},
            },
         }
    }

    componentDidMount(){
        const {lat,lng} = this.state
        getCity(lat,lng).then(res=>this.setState(res))
        // getWeather(lat,lng).then(res=>this.setState(res))
    }

    setLocation = () => {
        detectLocation()
            .then(({lat,lng})=>{
            this.setState(
                {lat,lng},
                ()=>getCity(this.state.lat,this.state.lng)
                    .then(res=>this.setState(
                        res,
                        // ()=>getWeather(lat,lng).then(res=>this.setState(res))
                    ))
            )
        })
    }

    render() { 
        return ( 
            <Provider value={{
                ...this.state,
                setLocation: this.setLocation
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