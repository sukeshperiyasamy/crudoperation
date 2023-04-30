const express = require('express')
const mongoose = require('mongoose')
const app = express()
const url='mongodb://127.0.0.1:27017/aliens' 

const con = mongoose.connection


mongoose.connect(url,{usenewurlparser:true})



con.on('open',()=>{
    console.log('connected')
})

app.use(express.json())

const alienRouter = require('./routers/aliens')
app.use('/aliens', alienRouter);

app.listen(9000, ()=>{
console.log('server started')
})