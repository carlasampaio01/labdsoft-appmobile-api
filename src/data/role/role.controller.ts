import RoleService from "./role.service";
import BaseController from "../../infra/extensions/controller.extensions";
import { IResponse, IRequest } from '../../interfaces/custom-express'

export default class RoleController extends BaseController {
  constructor() {
    super(new RoleService());
  }

  get = async (request: IRequest, response: IResponse) => {
    try {
        const result = await this._service.findById(request.params.id)
        return response.success(
            result
        )
    } catch (error) {
        return response.error('Not found')
    }
}

find = async (request: IRequest, response: IResponse) => {
    try {
        const result = await this._service.find()

        return response.success(
            result
        )
    } catch (error) {
        return response.error(error.message)
    }
}

paginate = async (request: IRequest, response: IResponse) => {
    try {
        const options = {
            page: request.params.page,
            limit: request.params.limit,
        }

        const query = request.query.filter
            ? JSON.parse(request.query.filter)
            : {}

        const result = await this._service.paginate(query, options)
        return response.success(
            result
        )
    } catch (error) {
        return response.error(error.message)
    }
}
}
