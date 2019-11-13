import { Router } from 'express'

import AuthRoutes from './../data/auth/auth.routes'
import InfoRoutes from './../data/info/info.routes'

import TaskRoutes from './../data/task/task.routes'
import TaskTypesRoutes from './../data/task_type/task_type.routes'
import CalendarRoutes from './../data/calendar/calendar.routes'
import EquipmentsRoutes from './../data/equipment/equipment.routes'
import EquipmentTypesRoutes from './../data/equipment_type/equipment_type.routes'
import RolesRoutes from './../data/role/role.routes'

const router = Router()

router.use('/info', InfoRoutes)
router.use('/auth', AuthRoutes)

router.use('/roles', RolesRoutes)

router.use('/tasks', TaskRoutes)
router.use('/task_types', TaskTypesRoutes)
router.use('/calendars', CalendarRoutes)
router.use('/equipments', EquipmentsRoutes)
router.use('/equipment_types', EquipmentTypesRoutes)

export default router
