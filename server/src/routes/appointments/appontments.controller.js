const app = require('../../app')
const model = require('../../model/appointment.model/appontment.model')

async function getOppsData () {
    return  await model.getData()
}
async function getAllApontments ( req , res ) {
   let data = await getOppsData()
   return res.status(200).json(data)

}

async function getAppointmentPage ( req , res ) {
    const data = await getOppsData()
     res.render('appointments' , {
        data:data,
    })
}
module.exports = {
    getAllApontments,getAppointmentPage,
}