import { Router } from 'express'
import PlanetController from '../controllers/PlanetController'

const router = Router()
const planetController = new PlanetController()

router.post('/planets', planetController.create)

export default router
