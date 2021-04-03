const express = require('express')
const app = express()
const PORT = process.env.PORT
const http = require('http').Server(app)
const db = require('./db')
const middleware = require('./middleware')
const route = require('./apis/routes')
const errHandle = require('./middleware/errHandle')
// const io = require('socket.io')(http, {
//     cors: {
//         origin: 'http://localhost:4001',
//     }
// })
//init route

middleware(app)

route(app)
app.use(errHandle)
db.connect()

app.get('/', (req, res) => {
    res.send('manh')
})

// io.on('connection', (socket) => {
//     console.log('hello')
//     socket.on('chat message', data => {
//         socket.emit('rep', 'hello client')
//     })
// })

http.listen(process.env.PORT || 5000, () => {
    console.log(`this app is listen to ${process.env.PORT || 5000} port!`)
})