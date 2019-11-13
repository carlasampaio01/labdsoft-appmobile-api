import { Router } from 'express'
import TaskTypeController from './task_type.controller'
import RouteMaker from '../../infra/extensions/route.extensions'
import Validations from './task_type.validations'

const router = Router()
const controller = new TaskTypeController()

RouteMaker(router, controller, Validations)

export default router
