import { Router } from 'express'
import UsersController from './user.controller'
import { RouteMakerAdmin } from '../../infra/extensions/route.extensions'
import Validations from './user.validations'

const router = Router()
const controller = new UsersController()

router.get('/:id', Validations.authenticated, controller.getUserCredential)
RouteMakerAdmin(router, controller, Validations)

export default router
