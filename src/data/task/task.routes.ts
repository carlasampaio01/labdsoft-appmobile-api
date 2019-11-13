import { Router } from 'express'
import TaskController from './task.controller'
import RouteMakerTask from '../../infra/extensions/route.extensions'
import Validations from './task.validations'

const router = Router()
const controller = new TaskController()

RouteMakerTask(router, controller, Validations)

export default router
