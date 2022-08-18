import { Router } from 'express'
import PlanetController from '../controllers/PlanetController'

const router = Router()
const planetController = new PlanetController()

router.post('/planets', planetController.create)
router.get('/planets', planetController.list)
router.get('/planets/:id', planetController.findById)

export default router
