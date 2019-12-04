
const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/metqua', {
    useNewUrlParser: true})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', error => console.log('connected to mongoose'))


app.listen(3000)

