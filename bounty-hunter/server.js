const express = require('express')
const app = express()
const port = 3004
// const uuid = require('uuid/v4')
const mongoose = require('mongoose');
app.use('/bounty', express.json())
app.use("/bounty", require("./serverRoutes/Bounty"))

mongoose.connect('mongodb://localhost:27017/bountyHunter',{useNewUrlParser: true})
.then(()=> console.log("Connected to Bounty Hunter"))
.catch(err => console.error(err));

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})


