import BaseRepository from '../../infra/extensions/repository.extensions'
import { Equipment } from './equipment.model'

export default class EquipmentRepository extends BaseRepository {
    private _new: Document
    constructor() {
        const _new = new Equipment()
        super('equipments')
        this._order = { description: 1 }
    }
}
