import EquipmentTypeService from './equipment_type.service'
import BaseController from '../../infra/extensions/controller.extensions'

export default class EquipmentTypeController extends BaseController {
    constructor() {
        super(new EquipmentTypeService())
    }
}
