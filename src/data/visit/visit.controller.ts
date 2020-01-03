import VisitService from './visit.service'
import BaseController from '../../infra/extensions/controller.extensions'
import { IResponse, IRequest } from '../../interfaces/custom-express'

export default class VisitController extends BaseController {
    constructor() {
        super(new VisitService())
    }

    generateVisit = async (request: IRequest, response: IResponse) => {
        try {
            const result = await this._service.generateVisit(request, response)
            return response.success(result)
        } catch (error) {
            return response.error('Not found')
        }
    }
}
