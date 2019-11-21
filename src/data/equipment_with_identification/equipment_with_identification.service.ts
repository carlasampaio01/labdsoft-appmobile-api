import BaseRepository from '../../infra/extensions/repository.extensions'
import BaseService from '../../infra/extensions/service.extensions'
import { EquipmentWithIdentification } from './equipment_with_identification.model'
import EquipmentWithIdentificationRepository from './equipment_with_identification.repository'

export default class EquipmentWithIdentificationService extends BaseService {
    constructor() {
        super(new EquipmentWithIdentificationRepository())
    }
}
