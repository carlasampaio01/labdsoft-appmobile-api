import ApiaryService from './apiary.service'
import BaseController from '../../infra/extensions/controller.extensions'
import { IResponse, IRequest } from '../../interfaces/custom-express'

export default class ApiaryController extends BaseController {
    constructor() {
        super(new ApiaryService())
    }

    addHive = async (request: IRequest, response: IResponse) => {
        try {
            const apiary = await this._service.findById(request.body.apiary);

            if (apiary.hives.indexOf(request.body.hive) === -1) {
                
                apiary.hives.push(request.body.hive)
            } else {
                return response.error("This hive already exists in this apiary")
            } 
           
            const result = await this._service.findByIdAndUpdate(apiary.id, apiary);

            return response.success(result)
        } catch (error) {
            return response.error(error.message)
        }
    }
}
