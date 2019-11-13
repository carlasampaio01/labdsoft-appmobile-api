import { Router } from 'express'
import EquipmentController from './equipment.controller'
import RouteMaker from '../../infra/extensions/route.extensions'
import Validations from './equipment.validations'

const router = Router()
const controller = new EquipmentController()

RouteMaker(router, controller, Validations)

export default router
