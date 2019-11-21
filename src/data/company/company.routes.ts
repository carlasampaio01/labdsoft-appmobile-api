import { Router } from 'express'
import CompanyController from './company.controller'
import RouteMaker from '../../infra/extensions/route.extensions'
import Validations from './company.validations'

const router = Router()
const controller = new CompanyController()

RouteMaker(router, controller, Validations)

export default router
