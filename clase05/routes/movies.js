import { Router } from 'express'
import { MovieController } from '../controllers/movies.js'
import { MovieModel } from '../models/mysql/movie.js'

export const moviesRouter = Router()

const movieController = new MovieController({ movieModel: MovieModel })

moviesRouter.get('/', MovieController.getAll)
moviesRouter.post('/', MovieController.create)

moviesRouter.get('/:id', MovieController.getById)
moviesRouter.delete('/:id', MovieController.delete)
moviesRouter.patch('/:id', MovieController.update)
