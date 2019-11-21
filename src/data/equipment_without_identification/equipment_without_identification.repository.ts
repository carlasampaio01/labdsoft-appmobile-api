import BaseRepository from '../../infra/extensions/repository.extensions'
import { EquipmentWithoutIdentification } from './equipment_without_identification.model'

export default class EquipmentWithoutIdentificationRepository extends BaseRepository {
    private _new: Document
    constructor() {
        const _new = new EquipmentWithoutIdentification()
        super('equipments_without_identification')
        this._order = { description: 1 }
    }
}
