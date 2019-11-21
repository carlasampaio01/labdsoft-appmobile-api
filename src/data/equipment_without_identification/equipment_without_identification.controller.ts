import EquipmentWithoutIdentificationService from './equipment_without_identification.service'
import BaseController from '../../infra/extensions/controller.extensions'

export default class EquipmentWithoutIdentificationController extends BaseController {
    constructor() {
        super(new EquipmentWithoutIdentificationService())
    }
}
