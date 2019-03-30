import { Router } from 'express'

import MovieController from './controllers/MovieController'

const routes = Router()

routes.use('/movies', MovieController.index)

export default routes
