import { Router } from 'express'
import UsersController from './user.controller'
import { RouteMakerUser } from '../../infra/extensions/route.extensions'
import Validations from './user.validations'

const router = Router()
const controller = new UsersController()

router.get('/:id', Validations.authenticated, controller.getUserCredential)
RouteMakerUser(router, controller, Validations)

export default router
