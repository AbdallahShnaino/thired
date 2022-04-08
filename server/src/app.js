const express = require('express')
const app = express()
const path = require('path') 
// routers
const appontmentsRouter = require('./routes/appointments/appointments.route')
app.set('view engine' , 'hbs')
app.set('views' , path.join(__dirname,'..','..','client','view' ) )
/* 
app.use('/site',express.static(path.join(__dirname,'..','..','client','view' )))
*/

app.use(express.json())
app.use('/appointemts' , appontmentsRouter)



module.exports = app 