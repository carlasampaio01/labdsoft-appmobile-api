import { Router } from 'express'
import EquipmentWithoutIdentificationController from './equipment_without_identification.controller'
import RouteMaker from '../../infra/extensions/route.extensions'
import Validations from './equipment_without_identification.validations'

const router = Router()
const controller = new EquipmentWithoutIdentificationController()

RouteMaker(router, controller, Validations)

export default router
