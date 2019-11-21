import EquipmentWithIdentificationService from './equipment_with_identification.service'
import BaseController from '../../infra/extensions/controller.extensions'
import { IResponse, IRequest } from '../../interfaces/custom-express'

export default class EquipmentWithIdentificationController extends BaseController {
    constructor() {
        super(new EquipmentWithIdentificationService())
    }

    getQrcode = async (request: IRequest, response: IResponse) => {
        try {
            const result = await this._service.getQrcode(request.params.id)
            return response.success(result)
        } catch (error) {
            return response.error('Not found')
        }
    }
}
