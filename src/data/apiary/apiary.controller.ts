import ApiaryService from './apiary.service'
import BaseController from '../../infra/extensions/controller.extensions'

export default class ApiaryController extends BaseController {
    constructor() {
        super(new ApiaryService())
    }
}
