import BaseRepository from '../../infra/extensions/repository.extensions'
import BaseService from '../../infra/extensions/service.extensions'
import { EquipmentType } from './equipment_type.model'
import EquipmentTypeRepository from './equipment_type.repository'

export default class EquipmentTypeService extends BaseService {
    constructor() {
        super(new EquipmentTypeRepository())
    }
}
