require('dotenv').config()
const path = require('path')
const express = require('express')
const app = express()

const port = process.env.PORT || 3004
// const uuid = require('uuid/v4')
const mongoose = require('mongoose');
app.use('/bounty', express.json())
app.use("/bounty", require("./serverRoutes/Bounty"))

// CONNECT TO MONGODB
const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}/${MONGO_DB}?retryWrites=true&w=majority`;
mongoose.set('useCreateIndex', true)
mongoose.set('useNewUrlParser', true)
mongoose.connect(uri, {}, err => {
  if (err) throw err;
  console.log(`connected to mongodb+srv://${MONGO_USER}@${MONGO_HOST}/${MONGO_DB}`);
});


app.use(express.static(path.join(__dirname, "client", "build")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})


