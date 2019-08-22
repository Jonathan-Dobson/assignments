import axios from 'axios';
import {darkSkyKey} from '../config/apiKey'

export default (lat,lng) => new Promise((resolve, reject)=>{
    axios.get(`https://vschool-cors.herokuapp.com?url=https://api.darksky.net/forecast/${darkSkyKey}/${lat},${lng}`)
    .then(({data})=>resolve({
        data: data,
        temp: parseInt(data.currently.temperature),
        daySummary: data.hourly.summary,
        weekSummary: data.daily.summary,
        forecast: {
            day1: {highTemp: parseInt(data.daily.data[0].temperatureHigh)},
            day2: {highTemp: parseInt(data.daily.data[1].temperatureHigh)},
            day3: {highTemp: parseInt(data.daily.data[2].temperatureHigh)},
            day4: {highTemp: parseInt(data.daily.data[3].temperatureHigh)},
            day5: {highTemp: parseInt(data.daily.data[4].temperatureHigh)},
            day6: {highTemp: parseInt(data.daily.data[5].temperatureHigh)},
            day7: {highTemp: parseInt(data.daily.data[6].temperatureHigh)},
            day8: {highTemp: parseInt(data.daily.data[7].temperatureHigh)},
        },


            
        }))
        .catch(e=>reject(`get weather error: ${e}`))
})

