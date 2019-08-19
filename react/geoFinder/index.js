const data = require('./data.js');
const express = require('express');
const cors = require('cors')
const app = express();
const port = 3001;

app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/locate', (req, res) => {
    res.json(closestCity(req.query))
})

function closestCity({lat,lng}){
    const lat1 = Math.abs(parseInt(lat*10000))
    const lng1 = Math.abs(parseInt(lng*10000))

    const nearbyCities = data.filter(location=>{
        return parseInt(location[1])===parseInt(lat) && parseInt(location[2])===parseInt(lng)
    })

    return nearbyCities.reduce((acc,location)=>{
        let margin = Math.abs((lat1 - Math.abs(parseInt(location[1]*10000))))
            + Math.abs((lng1 - Math.abs(parseInt(location[2]*10000))))
        return margin < acc[1]
            ? [location[0],margin]
            : acc
    },['',10000])[0]

}






app.listen(port, () => console.log(`Example app listening on port ${port}!`))