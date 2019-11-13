import BaseRepository from '../../infra/extensions/repository.extensions'
import BaseService from '../../infra/extensions/service.extensions'
import { Equipment } from './equipment.model'
import EquipmentRepository from './equipment.repository'

export default class EquipmentService extends BaseService {
    constructor() {
        super(new EquipmentRepository())
    }
}
