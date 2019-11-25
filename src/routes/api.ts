import { Router } from 'express'

import AuthRoutes from './../data/auth/auth.routes'
import InfoRoutes from './../data/info/info.routes'

import TaskRoutes from './../data/task/task.routes'
import UserRoutes from './../data/user/user.routes'
import ApiaryRoutes from './../data/apiary/apiary.routes'
import HivesRoutes from './../data/hive/hive.routes'
import CompanyRoutes from './../data/company/company.routes'
import TaskTypesRoutes from './../data/task_type/task_type.routes'
import EquipmentsWithIdentificationRoutes from '../data/equipment_with_identification/equipment_with_identification.routes'
import EquipmentsWithoutIdentificationRoutes from '../data/equipment_without_identification/equipment_without_identification.routes'

import RolesRoutes from './../data/role/role.routes'

const router = Router()

router.use('/info', InfoRoutes)
router.use('/auth', AuthRoutes)
router.use('/users', UserRoutes)
router.use('/hives', HivesRoutes)
router.use('/apiaries', ApiaryRoutes)
router.use('/roles', RolesRoutes)
router.use('/companies', CompanyRoutes)
router.use('/tasks', TaskRoutes)
router.use('/task_types', TaskTypesRoutes)
router.use(
    '/equipments_with_identification',
    EquipmentsWithIdentificationRoutes
)
router.use(
    '/equipments_without_identification',
    EquipmentsWithoutIdentificationRoutes
)

export default router
