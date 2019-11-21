import { Router } from 'express'
import EquipmentWithIdentificationController from './equipment_with_identification.controller'
import { RouteMakerEquipmentsWithIdentification } from '../../infra/extensions/route.extensions'
import Validations from './equipment_with_identification.validations'

const router = Router()
const controller = new EquipmentWithIdentificationController()

RouteMakerEquipmentsWithIdentification(router, controller, Validations)

export default router
