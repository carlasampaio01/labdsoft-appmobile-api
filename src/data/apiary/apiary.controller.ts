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
 
            apiary.hives = apiary.hives.push({hive: request.body.hive, info: request.body.info, hive_original: request.body.hive_original })      
           
            const result = await this._service.findByIdAndUpdate(apiary.id, apiary);

            return response.success(result)
        } catch (error) {
            return response.error(error.message)
        }
    }

    removeHive = async (request: IRequest, response: IResponse) => {
        try {
            const apiary = await this._service.findById(request.body.apiary);

            if(request.body.motive == "VENDA") {

                apiary.hives = apiary.hives.filter(item => item.hive != request.body.hive);

            } else {
                apiary.hives.forEach(function (item, index) {
                    if(item.hive == request.body.hive) {
                        item.is_deleted = true;
                        item.motive = request.body.motive;
                        item.desease = request.body.desease;
                    }
                });
            }
           
            const result = await this._service.findByIdAndUpdate(apiary.id, apiary);

            return response.success(result)
        } catch (error) {
            return response.error(error.message)
        }
    }

}
