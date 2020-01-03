import { Router } from 'express'
import HiveController from './hive.controller'
import { RouteMakerHive } from '../../infra/extensions/route.extensions'
import Validations from './hive.validations'

const router = Router()
const controller = new HiveController()

RouteMakerHive(router, controller, Validations)

export default router
