import HiveService from './hive.service'
import BaseController from '../../infra/extensions/controller.extensions'
import { IResponse, IRequest } from '../../interfaces/custom-express'

export default class HiveController extends BaseController {
    constructor() {
        super(new HiveService())
    }

    colocarAlca = async (request: IRequest, response: IResponse) => {
        try {
            const hive = await this._service.findById(request.body.hive)

            hive.equipments_with_identification = hive.equipments_with_identification.push(
                request.body.alca
            )

            const result = await this._service.findByIdAndUpdate(hive.id, hive)
            return response.success(result)
        } catch (error) {
            return response.error(error.message)
        }
    }
}
