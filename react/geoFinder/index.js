const data = require('./cities.js');
const express = require('express');
const cors = require('cors')
const app = express();
const port = 3001;

app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/locate', (req, res) => {
    res.json(closestCity(req.query))
})

app.get('/search/:string', (req, res) => {

    let found = data.filter(city=>city[0].match(new RegExp(req.params.string,'i')))
    res.json(searchCities(found))
})

function searchCities(query){

    return {res: query}
}

function closestCity({lat,lng}){
    const lat1 = Math.abs(parseInt(lat*10000))
    const lng1 = Math.abs(parseInt(lng*10000))
    const nearbyCities = data.filter(location=>{
        return parseInt(location[1])===parseInt(lat) && parseInt(location[2])===parseInt(lng)
    })
    if( nearbyCities.length>=1){
        const result = nearbyCities.reduce((acc,location)=>{
            let margin = Math.abs((lat1 - Math.abs(parseInt(location[1]*10000))))
            + Math.abs((lng1 - Math.abs(parseInt(location[2]*10000))))
            return margin < acc[1]
            ? [location,margin]
            : acc
        },[null,10000])
        return {
            city: result[0][0],
            state: result[0][4],
            country: result[0][3],
            accuracy: result[1]
        }
    }
    else {
        return {
            city: 'Unknown City',
            state: 'Unknown State',
            country: 'Unknown Country'
        }
    }
}






app.listen(port, () => console.log(`Example app listening on port ${port}!`))