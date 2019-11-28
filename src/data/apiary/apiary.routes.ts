import { Router } from 'express'
import ApiaryController from './apiary.controller'
import { RouteMakerApiary } from '../../infra/extensions/route.extensions'
import Validations from './apiary.validations'
import Authenticated from '../../infra/middleware/auth.middleware'

const router = Router()
const controller = new ApiaryController()

RouteMakerApiary(router, controller, Validations)

export default router
