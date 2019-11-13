import BaseRepository from '../../infra/extensions/repository.extensions'
import { Apiary } from './apiary.model'

export default class ApiaryRepository extends BaseRepository {
    private _new: Document
    constructor() {
        const _new = new Apiary()
        super('apiaries')
        this._order = { description: 1 }
    }
}
