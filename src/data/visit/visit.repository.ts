import BaseRepository from '../../infra/extensions/repository.extensions'
import { Visit } from './visit.model'

export default class VisitRepository extends BaseRepository {
    private _new: Document
    constructor() {
        const _new = new Visit()
        super('visits')
        this._order = { description: 1 }
    }
}
