import axios from 'axios';

export default (lat,lng) => new Promise((resolve, reject)=>{
    axios.get(`http://127.0.0.1:3001/locate?lat=${lat}&lng=${lng}`)
        .then(res=>resolve(res.data))
        .catch(e=>reject(`get city error: ${e}`))
})
