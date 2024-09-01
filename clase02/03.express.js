const express = require('express')
const ditto = require('./pokemon/ditto.json')

const app = express()
app.disable('x-powered-by') // quitamos de la cabecera automática, que digan que usamos Express

const PORT = process.env.PORT ?? 1234

// app.use(express.json()) esto es lo mismo que hay a continuación, pero realizado con express

app.use((req, res, next) => {
  /*
  app.get((req, res, next) => ...) este middleware solo sería para el método GET
  app.get('/pokemon/ditto', (req, res, next) => ...) Indicamos a que ruta queremos que afecte el middleware
  app.get('/pokemon/*', (req, res, next) => ...) a todas las rutas que empiecen por /pokemon
  */
  // console.log('mi primer middleware')
  if (req.method !== 'POST') return next()
  if (req.headers['content-type'] !== 'application/json') return next()

  // solo llegan reques que son POST y que tienen el header Content-Type: application/json
  let body = ' '

  // escucha el evento data
  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    // mutar la request y meter la información en el req.body
    req.body = data
    next()
  })
})

app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
  // res.send('<h1>Mi página</h1>')
  // res.status(200).send('<h1>Mi página</h1>') ya con express, no es necesario incluir el status o statusCode
  // res.json({ Mensaje: 'Hola Mundo' }) con el metodo "res.json" podemoms mandar un json directamente
})

app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body)
})

app.use((req, res) => {
  res.status(404).send('<h1>404</h1>')
})
app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
