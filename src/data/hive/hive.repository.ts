import BaseRepository from '../../infra/extensions/repository.extensions'
import { Hive } from './hive.model'

export default class HiveRepository extends BaseRepository {
    private _new: Document
    constructor() {
        const _new = new Hive()
        super('hives')
        this._order = { description: 1 }
    }
}
