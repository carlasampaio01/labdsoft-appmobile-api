import BaseRepository from '../../infra/extensions/repository.extensions'
import { EquipmentType } from './equipment_type.model'

export default class EquipmentTypeRepository extends BaseRepository {
    private _new: Document
    constructor() {
        const _new = new EquipmentType()
        super('equipment_types')
        this._order = { description: 1 }
    }
}
