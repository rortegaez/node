const http = require('node:http')
const { findAvailablePort } = require('./10.free-port.js')

// const desirePort = process.argv[2] ?? '0' con esta pasamos un argumento o sino pasamos argumento, será 0
const desirePort = process.env.PORT ?? 0
/* con esta construcción estamos pasando una variable de entorno, que la forma de ponerlo en la consola sería
PORT=1234 node 09.http.js, primero ponemos el puerto que queremos, después pondremos el nombre del archivo
*/

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola mundo')
})

findAvailablePort(desirePort).then(port => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`)
  })
})

/* server.listen(0, () => {
  console.log(`server listening on port http://localhost:${server.address().port}`)
}) */
