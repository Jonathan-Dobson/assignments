import React from 'react';
import axios from 'axios';
import {darkSkyKey} from './config/apiKey'
import {withRouter} from 'react-router-dom';
const {Provider, Consumer} = React.createContext()

class StateProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            lat: 42, 
            lng: 83, 
            city: '', 
            disableButtons: true, 
            enableDarkSkyAPI: true
        }
    }
    // ANNOUNCEMENT BROADCASTER AND BEHAVIOR DISPATCHER
    announce = (announcement, props) => {
        const {HAVEIT} = this
        console.log(announcement)
        switch(announcement){
            case 'USER SELECTED NEW LOCATION': { 
                HAVEIT('SAVE THE NEW LOCATION IN STATE', props)
                    .then(()=>{
                        this.announce('NEW LOCATION SAVED')
                    })
                    break;
            }
            case 'NEW LOCATION SAVED': {
                HAVEIT( 'SHOW LOADING WEATHER MODAL')
                if(this.state.enableDarkSkyAPI){
                    HAVEIT('REQUEST WEATHER DATA FROM DARKSKY', this.state)
                    .then(withData=>this.announce('NEW WEATHER DATA RECEIVED', withData))
                }else{
                    HAVEIT('REQUEST MOCK WEATHER DATA', props)
                    .then(withData=>this.announce('NEW WEATHER DATA RECEIVED', withData))
                }
                break;
            }

            case 'NEW WEATHER DATA RECEIVED': {
                HAVEIT('SAVE WEATHER DATA IN STATE', props)
                    .then( this.announce('NEW WEATHER DATA SAVED IN STATE') )
                break;
            }
            case 'NEW WEATHER DATA SAVED IN STATE': {
                HAVEIT('ENABLE THE NAVIGATION BUTTONS')
                HAVEIT( 'HIDE LOADING WEATHER MODAL')
                break;
            }
            case "CLICKED ON DETECT POSITION":{
                HAVEIT( 'SHOW DETECTING POPUP')
                HAVEIT( 'DETECT USER POSITION' )
                    .then ( withNewCoordinates => {
                        this.announce('NEW POSITION DETECTED', withNewCoordinates)
                    })
                break;
            }
            case 'NEW POSITION DETECTED': {
                HAVEIT( 'SHOW DETECTED CONFIRM MODAL')
                HAVEIT( 'HIDE DETECTING PROGRESS POPUP')
                HAVEIT( 'GET CITY FROM COORDINATES', props)
                    .then( location => 
                        HAVEIT( 'TEMPORARILY SAVE DETECTED LOCATION', 
                            {...location, lat: props.lat, lng: props.lng}
                        ) 
                    )
                
                break;
            }
            case 'CLICKED SAVE DETECTED POSITION': {
                HAVEIT( 'MAKE NEW POSITION ACTIVE')
                    .then( ()=>{

                        HAVEIT('HIDE DETECTED CONFIRM MODAL')
                        this.announce('NEW LOCATION SAVED')
                        HAVEIT( 'NAVIGATE TO HOME PAGE' )
                    })
                break;
            }
            case 'CLICKED DISCARD NEW POSITION': {
                HAVEIT( 'HIDE DETECTED CONFIRM MODAL')
                break;
            }
            case 'DETECTING LOCATION CANCELED': {
                HAVEIT('HIDE DETECTING PROGRESS POPUP')
                break;
            }

            // BROWSER NAVIGATION
            case 'CLICKED NAVIGATE TO SET LOCATION': {
                HAVEIT('NAVIGATE TO /SETLOCATION URL', props)                
                break;
            }
            case 'CLICKED NAVIGATE TO TODAYS WEATHER': {
                HAVEIT( 'NAVIGATE TO /DAILY URL', props)
                break;
            }
            case 'CLICKED NAVIGATE TO 7 DAY FORECAST': {
                HAVEIT('NAVIGATE TO /WEEKLY URL', props)
                break;
            }

            default: {
                console.log('PLEASE SETUP A SWITCH CASE FOR', announcement, props);
            }
        }
    }
        
    // THE ACTIONS
    HAVEIT = (action, props) => {
        switch (action) {

            case 'HIDE LOADING WEATHER MODAL': {
                return new Promise(resolve=>{
                    this.setState({loadingWeatherModal: false}, resolve(true))
                })
            }
            case 'SHOW LOADING WEATHER MODAL': {
                return new Promise(resolve=>{
                    this.setState({loadingWeatherModal: true}, resolve(true))
                })
            }
            case 'MAKE NEW POSITION ACTIVE': {
                return new Promise(resolve=>{
                    this.setState(prev=>({
                        lat: prev.tempLat, 
                        lng: prev.tempLng,
                        city: prev.tempCity,
                        state: prev.tempState,
                        country: prev.tempCountry
                    })
                    , resolve(true))
                })
            }
            case 'HIDE DETECTED CONFIRM MODAL': {
                return new Promise(resolve=>{
                    this.setState({detectedConfirmModal: false}, resolve(true))
                })
            }
            case 'SHOW DETECTED CONFIRM MODAL': {
                return new Promise(resolve=>{
                    this.setState({detectedConfirmModal: true}, resolve(true))
                })
            }
            case 'HIDE DETECTING PROGRESS POPUP': {
                return new Promise(resolve=>{
                    this.setState({detectingLocationModal: false},resolve(true))
                })
            }
            case 'SHOW DETECTING POPUP': {
                return new Promise(resolve=>{
                    this.setState({detectingLocationModal: true}, resolve(true))
                })
            }
            case 'GET CITY FROM COORDINATES': {
                const {lat,lng} = props
                return new Promise((resolve,reject)=>{
                    return axios.get(`http://geofinder.fromjon.com/locate?lat=${lat}&lng=${lng}`)
                    .then(res=>resolve(res.data))
                    .catch(e=>reject(`get city error: ${e}`))             
                })
            }
            case 'ENABLE THE NAVIGATION BUTTONS': {
                return new Promise(resolve=>this.setState({disableButtons: false},resolve(true)))
            }
            case 'REQUEST WEATHER DATA FROM DARKSKY': {
                console.log(props.lat, props.lng);
                return new Promise((resolve, reject)=>{
                    axios.get(`https://vschool-cors.herokuapp.com?url=https://api.darksky.net/forecast/${darkSkyKey}/${props.lat},${props.lng}`)
                    .then(({data})=>resolve({
                        data: data,
                        temp: parseInt(data.currently.temperature),
                        daySummary: data.hourly.summary,
                        weekSummary: data.daily.summary,
                        }))
                        .catch(e=>reject(`get weather error: ${e}`))
                })
            }
            case 'REQUEST MOCK WEATHER DATA': {
                return new Promise(resolve=>resolve({
                    data: {
                        "latitude": 40.769357,
                        "longitude": -111.885344,
                        "timezone": "America/Denver",
                        "currently": {
                            "time": 1566488822,
                            "summary": "Partly Cloudy",
                            "icon": "partly-cloudy-day",
                            "nearestStormDistance": 6,
                            "nearestStormBearing": 23,
                            "precipIntensity": 0,
                            "precipProbability": 0,
                            "temperature": 78.35,
                            "apparentTemperature": 78.35,
                            "dewPoint": 30.92,
                            "humidity": 0.18,
                            "pressure": 1005.39,
                            "windSpeed": 6.92,
                            "windGust": 11.76,
                            "windBearing": 179,
                            "cloudCover": 0.43,
                            "uvIndex": 3,
                            "visibility": 9.637,
                            "ozone": 300
                        },
                        "hourly": {
                            "summary": "Partly cloudy throughout the day.",
                            "icon": "partly-cloudy-day",
                            "data": [
                                {
                                    "time": 1566486000,
                                    "summary": "Partly Cloudy",
                                    "icon": "partly-cloudy-day",
                                    "precipIntensity": 0,
                                    "precipProbability": 0,
                                    "temperature": 74.85,
                                    "apparentTemperature": 74.85,
                                    "dewPoint": 32.19,
                                    "humidity": 0.21,
                                    "pressure": 1004.94,
                                    "windSpeed": 5.77,
                                    "windGust": 10.93,
                                    "windBearing": 155,
                                    "cloudCover": 0.41,
                                    "uvIndex": 1,
                                    "visibility": 10,
                                    "ozone": 298
                                },
                                {
                                    "time": 1566489600,
                                    "summary": "Partly Cloudy",
                                    "icon": "partly-cloudy-day",
                                    "precipIntensity": 0,
                                    "precipProbability": 0,
                                    "temperature": 79.32,
                                    "apparentTemperature": 79.32,
                                    "dewPoint": 30.57,
                                    "humidity": 0.17,
                                    "pressure": 1005.51,
                                    "windSpeed": 7.24,
                                    "windGust": 11.98,
                                    "windBearing": 185,
                                    "cloudCover": 0.44,
                                    "uvIndex": 3,
                                    "visibility": 9.529,
                                    "ozone": 300.5
                                },
                                {
                                    "time": 1566493200,
                                    "summary": "Partly Cloudy",
                                    "icon": "partly-cloudy-day",
                                    "precipIntensity": 0,
                                    "precipProbability": 0,
                                    "temperature": 83.58,
                                    "apparentTemperature": 83.58,
                                    "dewPoint": 30.8,
                                    "humidity": 0.15,
                                    "pressure": 1004.64,
                                    "windSpeed": 7.79,
                                    "windGust": 12.16,
                                    "windBearing": 278,
                                    "cloudCover": 0.44,
                                    "uvIndex": 5,
                                    "visibility": 10,
                                    "ozone": 303.7
                                },
                                {
                                    "time": 1566496800,
                                    "summary": "Mostly Cloudy",
                                    "icon": "partly-cloudy-day",
                                    "precipIntensity": 0.0008,
                                    "precipProbability": 0.01,
                                    "precipType": "rain",
                                    "temperature": 88.92,
                                    "apparentTemperature": 88.92,
                                    "dewPoint": 26.37,
                                    "humidity": 0.1,
                                    "pressure": 1005.77,
                                    "windSpeed": 9.2,
                                    "windGust": 15.15,
                                    "windBearing": 261,
                                    "cloudCover": 0.54,
                                    "uvIndex": 6,
                                    "visibility": 10,
                                    "ozone": 305.6
                                },
                                {
                                    "time": 1566500400,
                                    "summary": "Mostly Cloudy",
                                    "icon": "partly-cloudy-day",
                                    "precipIntensity": 0,
                                    "precipProbability": 0,
                                    "temperature": 91.56,
                                    "apparentTemperature": 91.56,
                                    "dewPoint": 27.79,
                                    "humidity": 0.1,
                                    "pressure": 1005.52,
                                    "windSpeed": 10.3,
                                    "windGust": 17.21,
                                    "windBearing": 244,
                                    "cloudCover": 0.77,
                                    "uvIndex": 5,
                                    "visibility": 10,
                                    "ozone": 305
                                },
                                {
                                    "time": 1566504000,
                                    "summary": "Overcast",
                                    "icon": "cloudy",
                                    "precipIntensity": 0.0006,
                                    "precipProbability": 0.01,
                                    "precipType": "rain",
                                    "temperature": 91.69,
                                    "apparentTemperature": 91.69,
                                    "dewPoint": 31.75,
                                    "humidity": 0.12,
                                    "pressure": 1005.57,
                                    "windSpeed": 10.47,
                                    "windGust": 16.06,
                                    "windBearing": 311,
                                    "cloudCover": 0.88,
                                    "uvIndex": 5,
                                    "visibility": 10,
                                    "ozone": 303.2
                                },
                                {
                                    "time": 1566507600,
                                    "summary": "Mostly Cloudy",
                                    "icon": "partly-cloudy-day",
                                    "precipIntensity": 0,
                                    "precipProbability": 0,
                                    "temperature": 91.36,
                                    "apparentTemperature": 91.36,
                                    "dewPoint": 34.75,
                                    "humidity": 0.14,
                                    "pressure": 1005.03,
                                    "windSpeed": 10.03,
                                    "windGust": 15.45,
                                    "windBearing": 288,
                                    "cloudCover": 0.79,
                                    "uvIndex": 5,
                                    "visibility": 10,
                                    "ozone": 301.9
                                },
                                {
                                    "time": 1566511200,
                                    "summary": "Mostly Cloudy",
                                    "icon": "partly-cloudy-day",
                                    "precipIntensity": 0,
                                    "precipProbability": 0,
                                    "temperature": 91.4,
                                    "apparentTemperature": 91.4,
                                    "dewPoint": 36.32,
                                    "humidity": 0.14,
                                    "pressure": 1005.01,
                                    "windSpeed": 9.33,
                                    "windGust": 14.57,
                                    "windBearing": 257,
                                    "cloudCover": 0.73,
                                    "uvIndex": 4,
                                    "visibility": 10,
                                    "ozone": 301.4
                                },
                                {
                                    "time": 1566514800,
                                    "summary": "Mostly Cloudy",
                                    "icon": "partly-cloudy-day",
                                    "precipIntensity": 0,
                                    "precipProbability": 0,
                                    "temperature": 91.44,
                                    "apparentTemperature": 91.44,
                                    "dewPoint": 36.04,
                                    "humidity": 0.14,
                                    "pressure": 1004.76,
                                    "windSpeed": 8.23,
                                    "windGust": 12.61,
                                    "windBearing": 329,
                                    "cloudCover": 0.74,
                                    "uvIndex": 3,
                                    "visibility": 10,
                                    "ozone": 301.4
                                },
                                {
                                    "time": 1566518400,
                                    "summary": "Mostly Cloudy",
                                    "icon": "partly-cloudy-day",
                                    "precipIntensity": 0,
                                    "precipProbability": 0,
                                    "temperature": 91.92,
                                    "apparentTemperature": 91.92,
                                    "dewPoint": 36.26,
                                    "humidity": 0.14,
                                    "pressure": 1004.74,
                                    "windSpeed": 7.45,
                                    "windGust": 10.91,
                                    "windBearing": 314,
                                    "cloudCover": 0.75,
                                    "uvIndex": 1,
                                    "visibility": 10,
                                    "ozone": 301.7
                                },
                                {
                                    "time": 1566522000,
                                    "summary": "Mostly Cloudy",
                                    "icon": "partly-cloudy-day",
                                    "precipIntensity": 0.0002,
                                    "precipProbability": 0.02,
                                    "precipType": "rain",
                                    "temperature": 90.59,
                                    "apparentTemperature": 90.59,
                                    "dewPoint": 36.77,
                                    "humidity": 0.15,
                                    "pressure": 1004.88,
                                    "windSpeed": 6.12,
                                    "windGust": 9.43,
                                    "windBearing": 330,
                                    "cloudCover": 0.55,
                                    "uvIndex": 0,
                                    "visibility": 10,
                                    "ozone": 302.7
                                },
                                {
                                    "time": 1566525600,
                                    "summary": "Partly Cloudy",
                                    "icon": "partly-cloudy-day",
                                    "precipIntensity": 0,
                                    "precipProbability": 0,
                                    "temperature": 87.14,
                                    "apparentTemperature": 87.14,
                                    "dewPoint": 37.98,
                                    "humidity": 0.18,
                                    "pressure": 1005.79,
                                    "windSpeed": 3.65,
                                    "windGust": 7.65,
                                    "windBearing": 351,
                                    "cloudCover": 0.48,
                                    "uvIndex": 0,
                                    "visibility": 10,
                                    "ozone": 304.2
                                },
                                {
                                    "time": 1566529200,
                                    "summary": "Partly Cloudy",
                                    "icon": "partly-cloudy-night",
                                    "precipIntensity": 0,
                                    "precipProbability": 0,
                                    "temperature": 83.28,
                                    "apparentTemperature": 83.28,
                                    "dewPoint": 38.84,
                                    "humidity": 0.21,
                                    "pressure": 1006.43,
                                    "windSpeed": 2.93,
                                    "windGust": 8.46,
                                    "windBearing": 355,
                                    "cloudCover": 0.43,
                                    "uvIndex": 0,
                                    "visibility": 10,
                                    "ozone": 305.8
                                },
                                {
                                    "time": 1566532800,
                                    "summary": "Partly Cloudy",
                                    "icon": "partly-cloudy-night",
                                    "precipIntensity": 0,
                                    "precipProbability": 0,
                                    "temperature": 80.14,
                                    "apparentTemperature": 80.14,
                                    "dewPoint": 39.37,
                                    "humidity": 0.23,
                                    "pressure": 1007.47,
                                    "windSpeed": 2.77,
                                    "windGust": 10.13,
                                    "windBearing": 17,
                                    "cloudCover": 0.43,
                                    "uvIndex": 0,
                                    "visibility": 10,
                                    "ozone": 307.7
                                },
                                {
                                    "time": 1566536400,
                                    "summary": "Partly Cloudy",
                                    "icon": "partly-cloudy-night",
                                    "precipIntensity": 0.0008,
                                    "precipProbability": 0.01,
                                    "precipType": "rain",
                                    "temperature": 77.72,
                                    "apparentTemperature": 77.72,
                                    "dewPoint": 38.98,
                                    "humidity": 0.25,
                                    "pressure": 1008.71,
                                    "windSpeed": 3.75,
                                    "windGust": 9.83,
                                    "windBearing": 47,
                                    "cloudCover": 0.45,
                                    "uvIndex": 0,
                                    "visibility": 10,
                                    "ozone": 309.9
                                },
                                {
                                    "time": 1566540000,
                                    "summary": "Mostly Cloudy",
                                    "icon": "partly-cloudy-night",
                                    "precipIntensity": 0,
                                    "precipProbability": 0,
                                    "temperature": 73.61,
                                    "apparentTemperature": 73.61,
                                    "dewPoint": 41.02,
                                    "humidity": 0.31,
                                    "pressure": 1009.77,
                                    "windSpeed": 3.77,
                                    "windGust": 6.67,
                                    "windBearing": 50,
                                    "cloudCover": 0.6,
                                    "uvIndex": 0,
                                    "visibility": 10,
                                    "ozone": 311.4
                                },
                                {
                                    "time": 1566543600,
                                    "summary": "Partly Cloudy",
                                    "icon": "partly-cloudy-night",
                                    "precipIntensity": 0,
                                    "precipProbability": 0,
                                    "temperature": 71.69,
                                    "apparentTemperature": 71.69,
                                    "dewPoint": 41.25,
                                    "humidity": 0.33,
                                    "pressure": 1010.11,
                                    "windSpeed": 3.89,
                                    "windGust": 6.87,
                                    "windBearing": 86,
                                    "cloudCover": 0.45,
                                    "uvIndex": 0,
                                    "visibility": 10,
                                    "ozone": 312.1
                                },
                                {
                                    "time": 1566547200,
                                    "summary": "Partly Cloudy",
                                    "icon": "partly-cloudy-night",
                                    "precipIntensity": 0,
                                    "precipProbability": 0,
                                    "temperature": 69.86,
                                    "apparentTemperature": 69.86,
                                    "dewPoint": 41.37,
                                    "humidity": 0.36,
                                    "pressure": 1010.81,
                                    "windSpeed": 3.81,
                                    "windGust": 6.61,
                                    "windBearing": 82,
                                    "cloudCover": 0.23,
                                    "uvIndex": 0,
                                    "visibility": 10,
                                    "ozone": 312
                                },
                                {
                                    "time": 1566550800,
                                    "summary": "Clear",
                                    "icon": "clear-night",
                                    "precipIntensity": 0.0002,
                                    "precipProbability": 0.02,
                                    "precipType": "rain",
                                    "temperature": 67.98,
                                    "apparentTemperature": 67.98,
                                    "dewPoint": 41.49,
                                    "humidity": 0.38,
                                    "pressure": 1011.24,
                                    "windSpeed": 3.75,
                                    "windGust": 6.25,
                                    "windBearing": 91,
                                    "cloudCover": 0.09,
                                    "uvIndex": 0,
                                    "visibility": 10,
                                    "ozone": 311.7
                                },
                                {
                                    "time": 1566554400,
                                    "summary": "Clear",
                                    "icon": "clear-night",
                                    "precipIntensity": 0.0002,
                                    "precipProbability": 0.02,
                                    "precipType": "rain",
                                    "temperature": 66.21,
                                    "apparentTemperature": 66.21,
                                    "dewPoint": 41.67,
                                    "humidity": 0.41,
                                    "pressure": 1011.71,
                                    "windSpeed": 3.82,
                                    "windGust": 5.84,
                                    "windBearing": 100,
                                    "cloudCover": 0.1,
                                    "uvIndex": 0,
                                    "visibility": 10,
                                    "ozone": 311.3
                                },
                                {
                                    "time": 1566558000,
                                    "summary": "Partly Cloudy",
                                    "icon": "partly-cloudy-night",
                                    "precipIntensity": 0,
                                    "precipProbability": 0,
                                    "temperature": 64.76,
                                    "apparentTemperature": 64.76,
                                    "dewPoint": 41.88,
                                    "humidity": 0.43,
                                    "pressure": 1012.18,
                                    "windSpeed": 3.88,
                                    "windGust": 5.31,
                                    "windBearing": 105,
                                    "cloudCover": 0.18,
                                    "uvIndex": 0,
                                    "visibility": 10,
                                    "ozone": 310.5
                                },
                                {
                                    "time": 1566561600,
                                    "summary": "Partly Cloudy",
                                    "icon": "partly-cloudy-night",
                                    "precipIntensity": 0,
                                    "precipProbability": 0,
                                    "temperature": 63.16,
                                    "apparentTemperature": 63.16,
                                    "dewPoint": 42.05,
                                    "humidity": 0.46,
                                    "pressure": 1012.61,
                                    "windSpeed": 3.8,
                                    "windGust": 4.8,
                                    "windBearing": 110,
                                    "cloudCover": 0.23,
                                    "uvIndex": 0,
                                    "visibility": 10,
                                    "ozone": 309.4
                                },
                                {
                                    "time": 1566565200,
                                    "summary": "Partly Cloudy",
                                    "icon": "partly-cloudy-day",
                                    "precipIntensity": 0,
                                    "precipProbability": 0,
                                    "temperature": 63.96,
                                    "apparentTemperature": 63.96,
                                    "dewPoint": 42.55,
                                    "humidity": 0.46,
                                    "pressure": 1012.97,
                                    "windSpeed": 3.24,
                                    "windGust": 4.19,
                                    "windBearing": 129,
                                    "cloudCover": 0.21,
                                    "uvIndex": 0,
                                    "visibility": 10,
                                    "ozone": 307.6
                                },
                                {
                                    "time": 1566568800,
                                    "summary": "Partly Cloudy",
                                    "icon": "partly-cloudy-day",
                                    "precipIntensity": 0.0002,
                                    "precipProbability": 0.01,
                                    "precipType": "rain",
                                    "temperature": 67.58,
                                    "apparentTemperature": 67.58,
                                    "dewPoint": 42.89,
                                    "humidity": 0.41,
                                    "pressure": 1013.23,
                                    "windSpeed": 2.54,
                                    "windGust": 3.6,
                                    "windBearing": 211,
                                    "cloudCover": 0.16,
                                    "uvIndex": 0,
                                    "visibility": 10,
                                    "ozone": 305.5
                                },
                                {
                                    "time": 1566572400,
                                    "summary": "Clear",
                                    "icon": "clear-day",
                                    "precipIntensity": 0.0002,
                                    "precipProbability": 0.01,
                                    "precipType": "rain",
                                    "temperature": 71.35,
                                    "apparentTemperature": 71.35,
                                    "dewPoint": 43.04,
                                    "humidity": 0.36,
                                    "pressure": 1013.45,
                                    "windSpeed": 2.54,
                                    "windGust": 3.52,
                                    "windBearing": 242,
                                    "cloudCover": 0.12,
                                    "uvIndex": 1,
                                    "visibility": 10,
                                    "ozone": 303.6
                                },
                                {
                                    "time": 1566576000,
                                    "summary": "Partly Cloudy",
                                    "icon": "partly-cloudy-day",
                                    "precipIntensity": 0,
                                    "precipProbability": 0,
                                    "temperature": 74.32,
                                    "apparentTemperature": 74.32,
                                    "dewPoint": 43.06,
                                    "humidity": 0.33,
                                    "pressure": 1013.53,
                                    "windSpeed": 3.92,
                                    "windGust": 4.4,
                                    "windBearing": 171,
                                    "cloudCover": 0.16,
                                    "uvIndex": 3,
                                    "visibility": 10,
                                    "ozone": 302.4
                                },
                                {
                                    "time": 1566579600,
                                    "summary": "Partly Cloudy",
                                    "icon": "partly-cloudy-day",
                                    "precipIntensity": 0,
                                    "precipProbability": 0,
                                    "temperature": 77.13,
                                    "apparentTemperature": 77.13,
                                    "dewPoint": 42.9,
                                    "humidity": 0.3,
                                    "pressure": 1013.36,
                                    "windSpeed": 5.98,
                                    "windGust": 6.36,
                                    "windBearing": 353,
                                    "cloudCover": 0.19,
                                    "uvIndex": 5,
                                    "visibility": 10,
                                    "ozone": 301.4
                                },
                                {
                                    "time": 1566583200,
                                    "summary": "Partly Cloudy",
                                    "icon": "partly-cloudy-day",
                                    "precipIntensity": 0,
                                    "precipProbability": 0,
                                    "temperature": 79.75,
                                    "apparentTemperature": 79.75,
                                    "dewPoint": 42.36,
                                    "humidity": 0.27,
                                    "pressure": 1013.16,
                                    "windSpeed": 7.53,
                                    "windGust": 7.98,
                                    "windBearing": 288,
                                    "cloudCover": 0.23,
                                    "uvIndex": 7,
                                    "visibility": 10,
                                    "ozone": 300.3
                                },
                                {
                                    "time": 1566586800,
                                    "summary": "Partly Cloudy",
                                    "icon": "partly-cloudy-day",
                                    "precipIntensity": 0,
                                    "precipProbability": 0,
                                    "temperature": 82.01,
                                    "apparentTemperature": 82.01,
                                    "dewPoint": 41.49,
                                    "humidity": 0.24,
                                    "pressure": 1012.88,
                                    "windSpeed": 8.07,
                                    "windGust": 8.84,
                                    "windBearing": 273,
                                    "cloudCover": 0.27,
                                    "uvIndex": 8,
                                    "visibility": 10,
                                    "ozone": 298.6
                                },
                                {
                                    "time": 1566590400,
                                    "summary": "Partly Cloudy",
                                    "icon": "partly-cloudy-day",
                                    "precipIntensity": 0,
                                    "precipProbability": 0,
                                    "temperature": 84.06,
                                    "apparentTemperature": 84.06,
                                    "dewPoint": 40.6,
                                    "humidity": 0.22,
                                    "pressure": 1012.49,
                                    "windSpeed": 8.1,
                                    "windGust": 9.34,
                                    "windBearing": 300,
                                    "cloudCover": 0.32,
                                    "uvIndex": 8,
                                    "visibility": 10,
                                    "ozone": 296.7
                                },
                                {
                                    "time": 1566594000,
                                    "summary": "Partly Cloudy",
                                    "icon": "partly-cloudy-day",
                                    "precipIntensity": 0,
                                    "precipProbability": 0,
                                    "temperature": 85.82,
                                    "apparentTemperature": 85.82,
                                    "dewPoint": 39.75,
                                    "humidity": 0.2,
                                    "pressure": 1011.94,
                                    "windSpeed": 7.91,
                                    "windGust": 9.5,
                                    "windBearing": 302,
                                    "cloudCover": 0.33,
                                    "uvIndex": 7,
                                    "visibility": 10,
                                    "ozone": 295.1
                                },
                                {
                                    "time": 1566597600,
                                    "summary": "Partly Cloudy",
                                    "icon": "partly-cloudy-day",
                                    "precipIntensity": 0,
                                    "precipProbability": 0,
                                    "temperature": 87.49,
                                    "apparentTemperature": 87.49,
                                    "dewPoint": 38.81,
                                    "humidity": 0.18,
                                    "pressure": 1011.22,
                                    "windSpeed": 7.59,
                                    "windGust": 9.43,
                                    "windBearing": 301,
                                    "cloudCover": 0.31,
                                    "uvIndex": 5,
                                    "visibility": 10,
                                    "ozone": 294
                                },
                                {
                                    "time": 1566601200,
                                    "summary": "Partly Cloudy",
                                    "icon": "partly-cloudy-day",
                                    "precipIntensity": 0,
                                    "precipProbability": 0,
                                    "temperature": 88.47,
                                    "apparentTemperature": 88.47,
                                    "dewPoint": 37.65,
                                    "humidity": 0.17,
                                    "pressure": 1010.45,
                                    "windSpeed": 7.02,
                                    "windGust": 8.95,
                                    "windBearing": 307,
                                    "cloudCover": 0.25,
                                    "uvIndex": 3,
                                    "visibility": 10,
                                    "ozone": 293.1
                                },
                                {
                                    "time": 1566604800,
                                    "summary": "Partly Cloudy",
                                    "icon": "partly-cloudy-day",
                                    "precipIntensity": 0.0003,
                                    "precipProbability": 0.01,
                                    "precipType": "rain",
                                    "temperature": 89.16,
                                    "apparentTemperature": 89.16,
                                    "dewPoint": 36.87,
                                    "humidity": 0.16,
                                    "pressure": 1010.19,
                                    "windSpeed": 6.17,
                                    "windGust": 8.17,
                                    "windBearing": 315,
                                    "cloudCover": 0.2,
                                    "uvIndex": 2,
                                    "visibility": 10,
                                    "ozone": 292.7
                                },
                                {
                                    "time": 1566608400,
                                    "summary": "Partly Cloudy",
                                    "icon": "partly-cloudy-day",
                                    "precipIntensity": 0.0003,
                                    "precipProbability": 0.01,
                                    "precipType": "rain",
                                    "temperature": 86.93,
                                    "apparentTemperature": 86.93,
                                    "dewPoint": 37.14,
                                    "humidity": 0.17,
                                    "pressure": 1010.55,
                                    "windSpeed": 4.64,
                                    "windGust": 6.76,
                                    "windBearing": 344,
                                    "cloudCover": 0.19,
                                    "uvIndex": 0,
                                    "visibility": 10,
                                    "ozone": 293
                                },
                                {
                                    "time": 1566612000,
                                    "summary": "Partly Cloudy",
                                    "icon": "partly-cloudy-day",
                                    "precipIntensity": 0.0003,
                                    "precipProbability": 0.01,
                                    "precipType": "rain",
                                    "temperature": 82.02,
                                    "apparentTemperature": 82.02,
                                    "dewPoint": 37.8,
                                    "humidity": 0.21,
                                    "pressure": 1011.26,
                                    "windSpeed": 2.84,
                                    "windGust": 5.07,
                                    "windBearing": 8,
                                    "cloudCover": 0.19,
                                    "uvIndex": 0,
                                    "visibility": 10,
                                    "ozone": 293.7
                                },
                                {
                                    "time": 1566615600,
                                    "summary": "Partly Cloudy",
                                    "icon": "partly-cloudy-night",
                                    "precipIntensity": 0.0003,
                                    "precipProbability": 0.01,
                                    "precipType": "rain",
                                    "temperature": 77.72,
                                    "apparentTemperature": 77.72,
                                    "dewPoint": 38.17,
                                    "humidity": 0.24,
                                    "pressure": 1011.98,
                                    "windSpeed": 1.98,
                                    "windGust": 4.18,
                                    "windBearing": 22,
                                    "cloudCover": 0.18,
                                    "uvIndex": 0,
                                    "visibility": 10,
                                    "ozone": 294.2
                                },
                                {
                                    "time": 1566619200,
                                    "summary": "Partly Cloudy",
                                    "icon": "partly-cloudy-night",
                                    "precipIntensity": 0.0002,
                                    "precipProbability": 0.01,
                                    "precipType": "rain",
                                    "temperature": 75.16,
                                    "apparentTemperature": 75.16,
                                    "dewPoint": 38.01,
                                    "humidity": 0.26,
                                    "pressure": 1012.68,
                                    "windSpeed": 2.97,
                                    "windGust": 4.87,
                                    "windBearing": 61,
                                    "cloudCover": 0.15,
                                    "uvIndex": 0,
                                    "visibility": 10,
                                    "ozone": 294.3
                                },
                                {
                                    "time": 1566622800,
                                    "summary": "Clear",
                                    "icon": "clear-night",
                                    "precipIntensity": 0,
                                    "precipProbability": 0,
                                    "temperature": 73.62,
                                    "apparentTemperature": 73.62,
                                    "dewPoint": 37.73,
                                    "humidity": 0.27,
                                    "pressure": 1013.39,
                                    "windSpeed": 4.91,
                                    "windGust": 6.42,
                                    "windBearing": 101,
                                    "cloudCover": 0.12,
                                    "uvIndex": 0,
                                    "visibility": 10,
                                    "ozone": 294.4
                                },
                                {
                                    "time": 1566626400,
                                    "summary": "Clear",
                                    "icon": "clear-night",
                                    "precipIntensity": 0,
                                    "precipProbability": 0,
                                    "temperature": 72.45,
                                    "apparentTemperature": 72.45,
                                    "dewPoint": 37.44,
                                    "humidity": 0.28,
                                    "pressure": 1013.76,
                                    "windSpeed": 6.39,
                                    "windGust": 7.61,
                                    "windBearing": 117,
                                    "cloudCover": 0.1,
                                    "uvIndex": 0,
                                    "visibility": 10,
                                    "ozone": 294.2
                                },
                                {
                                    "time": 1566630000,
                                    "summary": "Clear",
                                    "icon": "clear-night",
                                    "precipIntensity": 0,
                                    "precipProbability": 0,
                                    "temperature": 71.51,
                                    "apparentTemperature": 71.51,
                                    "dewPoint": 36.73,
                                    "humidity": 0.28,
                                    "pressure": 1013.92,
                                    "windSpeed": 6.74,
                                    "windGust": 7.88,
                                    "windBearing": 121,
                                    "cloudCover": 0.11,
                                    "uvIndex": 0,
                                    "visibility": 10,
                                    "ozone": 293.6
                                },
                                {
                                    "time": 1566633600,
                                    "summary": "Partly Cloudy",
                                    "icon": "partly-cloudy-night",
                                    "precipIntensity": 0,
                                    "precipProbability": 0,
                                    "temperature": 70.8,
                                    "apparentTemperature": 70.8,
                                    "dewPoint": 35.48,
                                    "humidity": 0.27,
                                    "pressure": 1013.91,
                                    "windSpeed": 6.63,
                                    "windGust": 7.79,
                                    "windBearing": 119,
                                    "cloudCover": 0.14,
                                    "uvIndex": 0,
                                    "visibility": 10,
                                    "ozone": 292.6
                                },
                                {
                                    "time": 1566637200,
                                    "summary": "Partly Cloudy",
                                    "icon": "partly-cloudy-night",
                                    "precipIntensity": 0.0002,
                                    "precipProbability": 0.01,
                                    "precipType": "rain",
                                    "temperature": 70.3,
                                    "apparentTemperature": 70.3,
                                    "dewPoint": 34.69,
                                    "humidity": 0.27,
                                    "pressure": 1013.96,
                                    "windSpeed": 6.57,
                                    "windGust": 7.88,
                                    "windBearing": 117,
                                    "cloudCover": 0.17,
                                    "uvIndex": 0,
                                    "visibility": 10,
                                    "ozone": 291.3
                                },
                                {
                                    "time": 1566640800,
                                    "summary": "Partly Cloudy",
                                    "icon": "partly-cloudy-night",
                                    "precipIntensity": 0.0002,
                                    "precipProbability": 0.01,
                                    "precipType": "rain",
                                    "temperature": 69.31,
                                    "apparentTemperature": 69.31,
                                    "dewPoint": 34.63,
                                    "humidity": 0.28,
                                    "pressure": 1014.15,
                                    "windSpeed": 6.83,
                                    "windGust": 8.25,
                                    "windBearing": 120,
                                    "cloudCover": 0.2,
                                    "uvIndex": 0,
                                    "visibility": 10,
                                    "ozone": 289.7
                                },
                                {
                                    "time": 1566644400,
                                    "summary": "Partly Cloudy",
                                    "icon": "partly-cloudy-night",
                                    "precipIntensity": 0.0002,
                                    "precipProbability": 0.01,
                                    "precipType": "rain",
                                    "temperature": 68.09,
                                    "apparentTemperature": 68.09,
                                    "dewPoint": 35.09,
                                    "humidity": 0.3,
                                    "pressure": 1014.41,
                                    "windSpeed": 7.14,
                                    "windGust": 8.78,
                                    "windBearing": 122,
                                    "cloudCover": 0.24,
                                    "uvIndex": 0,
                                    "visibility": 10,
                                    "ozone": 287.9
                                },
                                {
                                    "time": 1566648000,
                                    "summary": "Partly Cloudy",
                                    "icon": "partly-cloudy-night",
                                    "precipIntensity": 0.0003,
                                    "precipProbability": 0.01,
                                    "precipType": "rain",
                                    "temperature": 67.09,
                                    "apparentTemperature": 67.09,
                                    "dewPoint": 35.94,
                                    "humidity": 0.32,
                                    "pressure": 1014.6,
                                    "windSpeed": 7.3,
                                    "windGust": 9.56,
                                    "windBearing": 127,
                                    "cloudCover": 0.28,
                                    "uvIndex": 0,
                                    "visibility": 10,
                                    "ozone": 286.5
                                },
                                {
                                    "time": 1566651600,
                                    "summary": "Partly Cloudy",
                                    "icon": "partly-cloudy-day",
                                    "precipIntensity": 0.0002,
                                    "precipProbability": 0.01,
                                    "precipType": "rain",
                                    "temperature": 68.11,
                                    "apparentTemperature": 68.11,
                                    "dewPoint": 37.72,
                                    "humidity": 0.33,
                                    "pressure": 1014.59,
                                    "windSpeed": 7.2,
                                    "windGust": 10.94,
                                    "windBearing": 134,
                                    "cloudCover": 0.35,
                                    "uvIndex": 0,
                                    "visibility": 10,
                                    "ozone": 286.2
                                },
                                {
                                    "time": 1566655200,
                                    "summary": "Partly Cloudy",
                                    "icon": "partly-cloudy-day",
                                    "precipIntensity": 0,
                                    "precipProbability": 0,
                                    "temperature": 70.8,
                                    "apparentTemperature": 70.8,
                                    "dewPoint": 39.61,
                                    "humidity": 0.32,
                                    "pressure": 1014.54,
                                    "windSpeed": 6.95,
                                    "windGust": 12.56,
                                    "windBearing": 144,
                                    "cloudCover": 0.43,
                                    "uvIndex": 0,
                                    "visibility": 10,
                                    "ozone": 286.3
                                },
                                {
                                    "time": 1566658800,
                                    "summary": "Partly Cloudy",
                                    "icon": "partly-cloudy-day",
                                    "precipIntensity": 0,
                                    "precipProbability": 0,
                                    "temperature": 74.42,
                                    "apparentTemperature": 74.42,
                                    "dewPoint": 40.71,
                                    "humidity": 0.3,
                                    "pressure": 1014.44,
                                    "windSpeed": 6.75,
                                    "windGust": 13.42,
                                    "windBearing": 157,
                                    "cloudCover": 0.47,
                                    "uvIndex": 1,
                                    "visibility": 10,
                                    "ozone": 286.3
                                }
                            ]
                        },
                        "daily": {
                            "summary": "No precipitation throughout the week, with high temperatures rising to 99°F on Wednesday.",
                            "icon": "clear-day",
                            "data": [
                                {
                                    "time": 1566453600,
                                    "summary": "Partly cloudy throughout the day.",
                                    "icon": "partly-cloudy-day",
                                    "sunriseTime": 1566477973,
                                    "sunsetTime": 1566526656,
                                    "moonPhase": 0.73,
                                    "precipIntensity": 0.0002,
                                    "precipIntensityMax": 0.0017,
                                    "precipIntensityMaxTime": 1566489600,
                                    "precipProbability": 0.04,
                                    "precipType": "rain",
                                    "temperatureHigh": 91.92,
                                    "temperatureHighTime": 1566518400,
                                    "temperatureLow": 63.16,
                                    "temperatureLowTime": 1566561600,
                                    "apparentTemperatureHigh": 91.92,
                                    "apparentTemperatureHighTime": 1566518400,
                                    "apparentTemperatureLow": 63.16,
                                    "apparentTemperatureLowTime": 1566561600,
                                    "dewPoint": 31.78,
                                    "humidity": 0.17,
                                    "pressure": 1005.26,
                                    "windSpeed": 6.67,
                                    "windGust": 17.21,
                                    "windGustTime": 1566500400,
                                    "windBearing": 259,
                                    "cloudCover": 0.38,
                                    "uvIndex": 6,
                                    "uvIndexTime": 1566496800,
                                    "visibility": 9.981,
                                    "ozone": 301.4,
                                    "temperatureMin": 71.24,
                                    "temperatureMinTime": 1566478800,
                                    "temperatureMax": 91.92,
                                    "temperatureMaxTime": 1566518400,
                                    "apparentTemperatureMin": 71.24,
                                    "apparentTemperatureMinTime": 1566478800,
                                    "apparentTemperatureMax": 91.92,
                                    "apparentTemperatureMaxTime": 1566518400
                                },
                                {
                                    "time": 1566540000,
                                    "summary": "Partly cloudy throughout the day.",
                                    "icon": "partly-cloudy-day",
                                    "sunriseTime": 1566564432,
                                    "sunsetTime": 1566612967,
                                    "moonPhase": 0.77,
                                    "precipIntensity": 0.0001,
                                    "precipIntensityMax": 0.0003,
                                    "precipIntensityMaxTime": 1566608400,
                                    "precipProbability": 0.03,
                                    "precipType": "rain",
                                    "temperatureHigh": 89.16,
                                    "temperatureHighTime": 1566604800,
                                    "temperatureLow": 67.09,
                                    "temperatureLowTime": 1566648000,
                                    "apparentTemperatureHigh": 89.16,
                                    "apparentTemperatureHighTime": 1566604800,
                                    "apparentTemperatureLow": 67.09,
                                    "apparentTemperatureLowTime": 1566648000,
                                    "dewPoint": 40.36,
                                    "humidity": 0.3,
                                    "pressure": 1012.04,
                                    "windSpeed": 4.84,
                                    "windGust": 9.5,
                                    "windGustTime": 1566594000,
                                    "windBearing": 340,
                                    "cloudCover": 0.22,
                                    "uvIndex": 8,
                                    "uvIndexTime": 1566586800,
                                    "visibility": 10,
                                    "ozone": 301.3,
                                    "temperatureMin": 63.16,
                                    "temperatureMinTime": 1566561600,
                                    "temperatureMax": 89.16,
                                    "temperatureMaxTime": 1566604800,
                                    "apparentTemperatureMin": 63.16,
                                    "apparentTemperatureMinTime": 1566561600,
                                    "apparentTemperatureMax": 89.16,
                                    "apparentTemperatureMaxTime": 1566604800
                                },
                                {
                                    "time": 1566626400,
                                    "summary": "Partly cloudy throughout the day.",
                                    "icon": "partly-cloudy-day",
                                    "sunriseTime": 1566650891,
                                    "sunsetTime": 1566699276,
                                    "moonPhase": 0.8,
                                    "precipIntensity": 0.0001,
                                    "precipIntensityMax": 0.0003,
                                    "precipIntensityMaxTime": 1566648000,
                                    "precipProbability": 0.01,
                                    "precipType": "rain",
                                    "temperatureHigh": 96.01,
                                    "temperatureHighTime": 1566691200,
                                    "temperatureLow": 71.76,
                                    "temperatureLowTime": 1566734400,
                                    "apparentTemperatureHigh": 96.01,
                                    "apparentTemperatureHighTime": 1566691200,
                                    "apparentTemperatureLow": 71.76,
                                    "apparentTemperatureLowTime": 1566734400,
                                    "dewPoint": 36.01,
                                    "humidity": 0.21,
                                    "pressure": 1012.79,
                                    "windSpeed": 6.32,
                                    "windGust": 13.42,
                                    "windGustTime": 1566658800,
                                    "windBearing": 151,
                                    "cloudCover": 0.19,
                                    "uvIndex": 8,
                                    "uvIndexTime": 1566676800,
                                    "visibility": 10,
                                    "ozone": 286.4,
                                    "temperatureMin": 67.09,
                                    "temperatureMinTime": 1566648000,
                                    "temperatureMax": 96.01,
                                    "temperatureMaxTime": 1566691200,
                                    "apparentTemperatureMin": 67.09,
                                    "apparentTemperatureMinTime": 1566648000,
                                    "apparentTemperatureMax": 96.01,
                                    "apparentTemperatureMaxTime": 1566691200
                                },
                                {
                                    "time": 1566712800,
                                    "summary": "Clear throughout the day.",
                                    "icon": "clear-day",
                                    "sunriseTime": 1566737351,
                                    "sunsetTime": 1566785584,
                                    "moonPhase": 0.83,
                                    "precipIntensity": 0.0001,
                                    "precipIntensityMax": 0.0003,
                                    "precipIntensityMaxTime": 1566734400,
                                    "precipProbability": 0.01,
                                    "precipType": "rain",
                                    "temperatureHigh": 94.9,
                                    "temperatureHighTime": 1566781200,
                                    "temperatureLow": 67.52,
                                    "temperatureLowTime": 1566820800,
                                    "apparentTemperatureHigh": 94.9,
                                    "apparentTemperatureHighTime": 1566781200,
                                    "apparentTemperatureLow": 67.52,
                                    "apparentTemperatureLowTime": 1566820800,
                                    "dewPoint": 35.38,
                                    "humidity": 0.19,
                                    "pressure": 1012.54,
                                    "windSpeed": 6.43,
                                    "windGust": 19.11,
                                    "windGustTime": 1566781200,
                                    "windBearing": 216,
                                    "cloudCover": 0,
                                    "uvIndex": 9,
                                    "uvIndexTime": 1566759600,
                                    "visibility": 10,
                                    "ozone": 284.8,
                                    "temperatureMin": 71.76,
                                    "temperatureMinTime": 1566734400,
                                    "temperatureMax": 94.9,
                                    "temperatureMaxTime": 1566781200,
                                    "apparentTemperatureMin": 71.76,
                                    "apparentTemperatureMinTime": 1566734400,
                                    "apparentTemperatureMax": 94.9,
                                    "apparentTemperatureMaxTime": 1566781200
                                },
                                {
                                    "time": 1566799200,
                                    "summary": "Clear throughout the day.",
                                    "icon": "clear-day",
                                    "sunriseTime": 1566823810,
                                    "sunsetTime": 1566871892,
                                    "moonPhase": 0.87,
                                    "precipIntensity": 0.0001,
                                    "precipIntensityMax": 0.0004,
                                    "precipIntensityMaxTime": 1566853200,
                                    "precipProbability": 0.01,
                                    "precipType": "rain",
                                    "temperatureHigh": 90.04,
                                    "temperatureHighTime": 1566860400,
                                    "temperatureLow": 69.49,
                                    "temperatureLowTime": 1566907200,
                                    "apparentTemperatureHigh": 90.04,
                                    "apparentTemperatureHighTime": 1566860400,
                                    "apparentTemperatureLow": 69.49,
                                    "apparentTemperatureLowTime": 1566907200,
                                    "dewPoint": 21.74,
                                    "humidity": 0.13,
                                    "pressure": 1014.31,
                                    "windSpeed": 3.82,
                                    "windGust": 11.09,
                                    "windGustTime": 1566853200,
                                    "windBearing": 327,
                                    "cloudCover": 0,
                                    "uvIndex": 9,
                                    "uvIndexTime": 1566846000,
                                    "visibility": 10,
                                    "ozone": 288.7,
                                    "temperatureMin": 67.52,
                                    "temperatureMinTime": 1566820800,
                                    "temperatureMax": 90.04,
                                    "temperatureMaxTime": 1566860400,
                                    "apparentTemperatureMin": 67.52,
                                    "apparentTemperatureMinTime": 1566820800,
                                    "apparentTemperatureMax": 90.04,
                                    "apparentTemperatureMaxTime": 1566860400
                                },
                                {
                                    "time": 1566885600,
                                    "summary": "Clear throughout the day.",
                                    "icon": "clear-day",
                                    "sunriseTime": 1566910269,
                                    "sunsetTime": 1566958199,
                                    "moonPhase": 0.91,
                                    "precipIntensity": 0.0002,
                                    "precipIntensityMax": 0.0004,
                                    "precipIntensityMaxTime": 1566907200,
                                    "precipProbability": 0.01,
                                    "precipType": "rain",
                                    "temperatureHigh": 96.3,
                                    "temperatureHighTime": 1566946800,
                                    "temperatureLow": 75.88,
                                    "temperatureLowTime": 1566993600,
                                    "apparentTemperatureHigh": 96.3,
                                    "apparentTemperatureHighTime": 1566946800,
                                    "apparentTemperatureLow": 75.88,
                                    "apparentTemperatureLowTime": 1566993600,
                                    "dewPoint": 17.24,
                                    "humidity": 0.09,
                                    "pressure": 1012.68,
                                    "windSpeed": 4.63,
                                    "windGust": 13.04,
                                    "windGustTime": 1566939600,
                                    "windBearing": 106,
                                    "cloudCover": 0.05,
                                    "uvIndex": 9,
                                    "uvIndexTime": 1566932400,
                                    "visibility": 10,
                                    "ozone": 286,
                                    "temperatureMin": 69.49,
                                    "temperatureMinTime": 1566907200,
                                    "temperatureMax": 96.3,
                                    "temperatureMaxTime": 1566946800,
                                    "apparentTemperatureMin": 69.49,
                                    "apparentTemperatureMinTime": 1566907200,
                                    "apparentTemperatureMax": 96.3,
                                    "apparentTemperatureMaxTime": 1566946800
                                },
                                {
                                    "time": 1566972000,
                                    "summary": "Mostly cloudy throughout the day.",
                                    "icon": "partly-cloudy-day",
                                    "sunriseTime": 1566996728,
                                    "sunsetTime": 1567044505,
                                    "moonPhase": 0.95,
                                    "precipIntensity": 0.001,
                                    "precipIntensityMax": 0.0093,
                                    "precipIntensityMaxTime": 1567058400,
                                    "precipProbability": 0.05,
                                    "precipType": "rain",
                                    "temperatureHigh": 99.38,
                                    "temperatureHighTime": 1567033200,
                                    "temperatureLow": 73.61,
                                    "temperatureLowTime": 1567080000,
                                    "apparentTemperatureHigh": 99.38,
                                    "apparentTemperatureHighTime": 1567033200,
                                    "apparentTemperatureLow": 73.61,
                                    "apparentTemperatureLowTime": 1567080000,
                                    "dewPoint": 27.52,
                                    "humidity": 0.12,
                                    "pressure": 1011.43,
                                    "windSpeed": 4.4,
                                    "windGust": 11.62,
                                    "windGustTime": 1567029600,
                                    "windBearing": 131,
                                    "cloudCover": 0.42,
                                    "uvIndex": 8,
                                    "uvIndexTime": 1567022400,
                                    "visibility": 10,
                                    "ozone": 285.1,
                                    "temperatureMin": 75.88,
                                    "temperatureMinTime": 1566993600,
                                    "temperatureMax": 99.38,
                                    "temperatureMaxTime": 1567033200,
                                    "apparentTemperatureMin": 75.88,
                                    "apparentTemperatureMinTime": 1566993600,
                                    "apparentTemperatureMax": 99.38,
                                    "apparentTemperatureMaxTime": 1567033200
                                },
                                {
                                    "time": 1567058400,
                                    "summary": "Partly cloudy throughout the day.",
                                    "icon": "partly-cloudy-day",
                                    "sunriseTime": 1567083187,
                                    "sunsetTime": 1567130810,
                                    "moonPhase": 0.99,
                                    "precipIntensity": 0.0011,
                                    "precipIntensityMax": 0.0093,
                                    "precipIntensityMaxTime": 1567058400,
                                    "precipProbability": 0.08,
                                    "precipType": "rain",
                                    "temperatureHigh": 96.53,
                                    "temperatureHighTime": 1567119600,
                                    "temperatureLow": 73.73,
                                    "temperatureLowTime": 1567166400,
                                    "apparentTemperatureHigh": 96.53,
                                    "apparentTemperatureHighTime": 1567119600,
                                    "apparentTemperatureLow": 73.73,
                                    "apparentTemperatureLowTime": 1567166400,
                                    "dewPoint": 42.14,
                                    "humidity": 0.23,
                                    "pressure": 1012.69,
                                    "windSpeed": 5.4,
                                    "windGust": 13.86,
                                    "windGustTime": 1567094400,
                                    "windBearing": 149,
                                    "cloudCover": 0.36,
                                    "uvIndex": 8,
                                    "uvIndexTime": 1567108800,
                                    "visibility": 10,
                                    "ozone": 280.7,
                                    "temperatureMin": 73.61,
                                    "temperatureMinTime": 1567080000,
                                    "temperatureMax": 96.53,
                                    "temperatureMaxTime": 1567119600,
                                    "apparentTemperatureMin": 73.61,
                                    "apparentTemperatureMinTime": 1567080000,
                                    "apparentTemperatureMax": 96.53,
                                    "apparentTemperatureMaxTime": 1567119600
                                }
                            ]
                        },
                        "offset": -6
                    },
                            temp: 19,
                            daySummary: "MOCK DATA Partly cloudy throughout the day.",
                            weekSummary: "MOCK DATA No precipitation throughout the week, with high temperatures rising to 99°F on Wednesday.",
                    
                    }))
            }
            case 'SAVE WEATHER DATA IN STATE': {
                return new Promise(resolve=>this.setState(props,resolve(true)))
            }
            case 'SAVE THE NEW LOCATION IN STATE': {
                const {city,state,country,lat,lng} = props
                return new Promise(resolve=>
                    this.setState({city,state,country,lat,lng},resolve(true)))
            }
            case 'DETECT USER POSITION': {
                return new Promise((resolve, reject)=>{
                    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
                        return resolve({
                            lat: latitude,
                            lng: longitude
                        })
                      }, err=>{
                          console.warn(`ERROR(${err.code}): ${err.message}`);
                      }, {
                        enableHighAccuracy: true,
                        timeout: 5000,
                        maximumAge: 0
                      });
                })
            }
            case 'SAVE COORDINATES TO STATE': {
                const {lat,lng} = props
                return new Promise(resolve=>
                    this.setState({lat,lng},resolve(true)))
            }
            case 'TEMPORARILY SAVE DETECTED LOCATION': {
                const {city,state,country,lat,lng} = props
                return new Promise(resolve=>{
                    const result = {
                        tempLat: lat, 
                        tempLng: lng,
                        tempCity: city,
                        tempState: state,
                        tempCountry: country
                    }
                    this.setState(result,resolve(result))
                })
            }
            case 'NAVIGATE TO HOME PAGE': {
                return new Promise(resolve=>{
                    resolve(
                        withRouter(({history})=>{
                            history.push('/')
                        }
                            ))
                })
            }
            case 'NAVIGATE TO /DAILY URL': {
                return new Promise(resolve => {
                    resolve(props.history.push('/daily'))
                })
            }
            case 'NAVIGATE TO /WEEKLY URL': {
                return new Promise(resolve => {
                    resolve(props.history.push('/weekly'))
                })
            }
            case 'NAVIGATE TO /SETLOCATION URL': {
                return new Promise(resolve => {
                    resolve(props.history.push('/setLocation'))
                })
            }

            default: {
                console.log('PLEASE SETUP A SWITCH CASE TO HAVE IT', action, props);
            }
        }
    }

    // RENDER THE PROVIDER
    render() { 
        return ( 
            <Provider value={{
                ...this.state,
                announce: this.announce
            }}> 
                {this.props.children}
            </Provider>
         );
    }
}

export default StateProvider;

export const WithState = (C) => props => <Consumer>
    {value=> <C {...value} {...props}></C>}
</Consumer>