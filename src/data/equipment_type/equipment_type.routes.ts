import { Router } from 'express'
import EquipmentTypeController from './equipment_type.controller'
import RouteMaker from '../../infra/extensions/route.extensions'
import Validations from './equipment_type.validations'

const router = Router()
const controller = new EquipmentTypeController()

RouteMaker(router, controller, Validations)

export default router
