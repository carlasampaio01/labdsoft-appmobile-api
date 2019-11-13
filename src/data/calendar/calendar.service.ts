import BaseRepository from '../../infra/extensions/repository.extensions'
import BaseService from '../../infra/extensions/service.extensions'
import { Calendar } from './calendar.model'
import CalendarRepository from './calendar.repository'

export default class CalendarService extends BaseService {
    constructor() {
        super(new CalendarRepository())
    }
}
