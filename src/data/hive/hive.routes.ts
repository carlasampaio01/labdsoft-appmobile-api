import { Router } from 'express'
import HiveController from './hive.controller'
import RouteMaker from '../../infra/extensions/route.extensions'
import Validations from './hive.validations'

const router = Router()
const controller = new HiveController()

RouteMaker(router, controller, Validations)

export default router
