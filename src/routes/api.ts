import { Router } from 'express'

import AuthRoutes from './../data/auth/auth.routes'
import InfoRoutes from './../data/info/info.routes'

import TaskRoutes from './../data/task/task.routes'
import TaskTypesRoutes from './../data/task_type/task_type.routes'
import CalendarRoutes from './../data/calendar/calendar.routes'
import EquipmentsWithIdentificationRoutes from '../data/equipment_with_identification/equipment_with_identification.routes'
import EquipmentsWithoutIdentificationRoutes from '../data/equipment_without_identification/equipment_without_identification.routes'

import RolesRoutes from './../data/role/role.routes'

const router = Router()

router.use('/info', InfoRoutes)
router.use('/auth', AuthRoutes)

router.use('/roles', RolesRoutes)

router.use('/tasks', TaskRoutes)
router.use('/task_types', TaskTypesRoutes)
router.use('/calendars', CalendarRoutes)
router.use(
    '/equipments_with_identification',
    EquipmentsWithIdentificationRoutes
)
router.use(
    '/equipments_without_identification',
    EquipmentsWithoutIdentificationRoutes
)

export default router
