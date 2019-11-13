import BaseRepository from '../../infra/extensions/repository.extensions'
import { Calendar } from './calendar.model'

export default class CalendarRepository extends BaseRepository {
    private _new: Document
    constructor() {
        const _new = new Calendar()
        super('calendars')
        this._order = { description: 1 }
    }
}
