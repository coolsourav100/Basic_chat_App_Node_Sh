const express = require('express')
const app = express()
const userRouter = require('./routes/user')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))
app.use(userRouter)


app.listen(3000)