const app = require('./app')
const http = require('http')
const server = http.createServer(app)

const PORT = process.env.POST | 3000
server.listen(PORT , () => {
    console.log("start listning at PORT "+PORT)
})
