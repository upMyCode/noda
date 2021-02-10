const http = require('http');

const server = http.createServer((req, resp) => {
    resp.writeHead(200, { 'Content-Type': 'text/html'})
    resp.end('Hello!!!') // Завершает ответ с  сервера 
})

server.listen(3000, () => {
    console.log('Server has been started')
})