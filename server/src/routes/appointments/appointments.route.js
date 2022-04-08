// appointments.js
const app = require('../../app')
const express = require('express')
const {getAllApontments , getAppointmentPage} = require('./appontments.controller')

const appontmentsRouter = express.Router()

appontmentsRouter.get('/' , getAllApontments )
appontmentsRouter.get('/tv' , getAppointmentPage )

module.exports = appontmentsRouter