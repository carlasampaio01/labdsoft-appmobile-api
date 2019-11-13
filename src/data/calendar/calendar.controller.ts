import CalendarService from './calendar.service'
import BaseController from '../../infra/extensions/controller.extensions'

export default class CalendarController extends BaseController {
    constructor() {
        super(new CalendarService())
    }
}
