import { Router } from 'express'
import CalendarController from './calendar.controller'
import RouteMaker from '../../infra/extensions/route.extensions'
import Validations from './calendar.validations'

const router = Router()
const controller = new CalendarController()

RouteMaker(router, controller, Validations)

export default router
