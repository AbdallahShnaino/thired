const API_URL = "http:/localhost:3000"

async function getAllAppointments () {
   const res = fetch(API_URL+"/appointemts")
   return await res.json()
}