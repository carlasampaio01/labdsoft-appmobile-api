import BaseRepository from '../../infra/extensions/repository.extensions'
import { EquipmentWithIdentification } from './equipment_with_identification.model'

export default class EquipmentWithIdentificationRepository extends BaseRepository {
    private _new: Document
    constructor() {
        const _new = new EquipmentWithIdentification()
        super('equipments_with_identification')
        this._order = { description: 1 }
    }
}
