import ApiaryService from './apiary.service'
import BaseController from '../../infra/extensions/controller.extensions'
import { IResponse, IRequest } from '../../interfaces/custom-express'

export default class ApiaryController extends BaseController {
    constructor() {
        super(new ApiaryService())
    }
}
