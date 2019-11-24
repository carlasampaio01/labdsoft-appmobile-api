import { Router } from 'express'
import RoleController from './role.controller'
import { RouteMakerRole } from '../../infra/extensions/route.extensions'
import Validations from './role.validations'

const router = Router()
const controller = new RoleController()

/**
 *
 * @route GET /api/roles
 * @group Get List of Roles
 * @returns {object} 200 - A list of Roles
 * @returns {Error}  default - Unexpected error
 */


RouteMakerRole(router, controller, Validations)

export default router
