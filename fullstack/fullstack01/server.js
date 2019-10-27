const express = require('express')
const app = express()
const  morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 7000

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect("mongodb://localhost:27017/pets",
{
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: false,
    useUnifiedTopology: true,
},
() => {
    console.log("Connected to database")
})

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})

})

app.use("/pets", requre('')
)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
}
)