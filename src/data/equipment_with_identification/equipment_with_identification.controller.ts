import EquipmentWithIdentificationService from './equipment_with_identification.service'
import BaseController from '../../infra/extensions/controller.extensions'

export default class EquipmentWithIdentificationController extends BaseController {
    constructor() {
        super(new EquipmentWithIdentificationService())
    }
}
