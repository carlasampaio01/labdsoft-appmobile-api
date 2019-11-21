import BaseRepository from '../../infra/extensions/repository.extensions'
import BaseService from '../../infra/extensions/service.extensions'
import { EquipmentWithoutIdentification } from './equipment_without_identification.model'
import EquipmentWithoutIdentificationRepository from './equipment_without_identification.repository'

export default class EquipmentWithoutIdentificationService extends BaseService {
    constructor() {
        super(new EquipmentWithoutIdentificationRepository())
    }
}
