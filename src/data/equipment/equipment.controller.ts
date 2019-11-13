import EquipmentService from './equipment.service'
import BaseController from '../../infra/extensions/controller.extensions'

export default class EquipmentController extends BaseController {
    constructor() {
        super(new EquipmentService())
    }
}
