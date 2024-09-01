const http = require('node:http')
const fs = require('node:fs') // es necesario para poder ver la imagen desde el sistema de archivos

const desirePort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  if (req.url === '/') {
    res.end('<h1>Bienvenido a mi página de inicio</h1>')
  } else if (req.url === '/imagen') {
    fs.readFile('./captura01.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>500 Internal Server Error</h1>')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('<h1>Contacto</h1>')
  } else {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('<h1>404</h1>')
  }
}

const server = http.createServer(processRequest)

server.listen(desirePort, () => {
  console.log(`Server listening on port http://localhost:${desirePort}`)
})
