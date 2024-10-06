import express, { json } from 'express'
// import { corsMiddleware } from './middlewares/cors.js'
import cors from 'cors'
import { moviesRouter } from './routes/movies.js'

const app = express()
app.use(json())
// app.use(corsMiddleware())
app.use(cors())
app.disable('x-powered-by')

app.get('/', (req, res) => {
  res.json({ message: 'hola mundo' })
})

app.use('/movies', moviesRouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
