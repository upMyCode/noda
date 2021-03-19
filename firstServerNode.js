// const http = require('http');
// const hostName = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/plain')
//     res.end(`Hello World\n`)
// })

// server.listen(port, hostName, () => {
//     console.log(`Server running at http://${hostName}:${port}/`)
// })

const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send('Hi!')
})

app.listen(4000, () => console.log('Server done'))
process.on('SIGTERM', () => {
    app.close(() => {
        console.log('Thats end')
    })
})