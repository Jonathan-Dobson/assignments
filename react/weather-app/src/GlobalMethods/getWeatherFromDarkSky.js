import axios from 'axios';
import {darkSkyKey} from '../config/apiKey'

export default (lat,lng) => new Promise((resolve, reject)=>{
    axios.get(`https://vschool-cors.herokuapp.com?url=https://api.darksky.net/forecast/${darkSkyKey}/${lat},${lng}`)
        .then(res=>resolve({
            temp: parseInt(res.data.currently.temperature),
            summary: res.data.hourly.summary
        }))
        .catch(e=>reject(`get weather error: ${e}`))
})

