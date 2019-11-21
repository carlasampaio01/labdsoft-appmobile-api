import ApiaryService from './apiary.service'
import BaseController from '../../infra/extensions/controller.extensions'
import { IResponse, IRequest } from '../../interfaces/custom-express'

export default class ApiaryController extends BaseController {
    constructor() {
        super(new ApiaryService())
    }

    nearest = async (request: IRequest, response: IResponse) => {
        try {
            const result = await this._service.nearest()
            return response.success(result)
        } catch (error) {
            return response.error('Not found')
        }
    }
}
