import { Router } from 'express'
import EquipmentWithIdentificationController from './equipment_with_identification.controller'
import RouteMaker from '../../infra/extensions/route.extensions'
import Validations from './equipment_with_identification.validations'

const router = Router()
const controller = new EquipmentWithIdentificationController()

RouteMaker(router, controller, Validations)

export default router
