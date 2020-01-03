import { Router } from 'express'
import { RouteMakerVisit } from '../../infra/extensions/route.extensions'
import VisitController from './visit.controller'
import Validations from './visit.validations'

const router = Router()
const controller = new VisitController()

RouteMakerVisit(router, controller, Validations)

export default router
