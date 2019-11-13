import { Router } from 'express'
import ApiaryController from './apiary.controller'
import RouteMaker from '../../infra/extensions/route.extensions'
import Validations from './apiary.validations'

const router = Router()
const controller = new ApiaryController()

RouteMaker(router, controller, Validations)

export default router
