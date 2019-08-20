import React from 'react';
import getCity from './GlobalMethods/getCityFromCoordinates'
// import getWeather from './GlobalMethods/getWeatherFromDarkSky'
const {Provider, Consumer} = React.createContext()

class WeatherProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
                summary: '.',
                temp: '.',
                city: '.',
                state: '.',
                country: '.',
                accuracy: '',
                lat: 42.5,
                lng: -83.3
         }
    }

    componentDidMount(){
        const {lat,lng} = this.state
        getCity(lat,lng)
            .then(res=>this.setState(res))
        // getWeather(lat,lng)
        //     .then(res=>this.setState(res))
    }

    render() { 
        return ( 
            <Provider value={{
                ...this.state,
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