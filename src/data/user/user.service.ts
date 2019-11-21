import { IResponse, IRequest } from '../../interfaces/custom-express'
import * as mongoose from 'mongoose'
import BaseController from '../../infra/extensions/controller.extensions'
import UserRepository from './user.repository'
import RoleRepository from '../role/role.repository'
import BaseService from '../../infra/extensions/service.extensions'
import { userInfo } from 'os'

export default class UserService extends BaseService {
    constructor() {
        super(new UserRepository())
    }

    getUserCredential = async (request: IRequest, response: IResponse) => {
        try {
            const result = await this._repository.getUserCredential(
                request.params.id
            )
            return response.success(result)
        } catch (error) {
            return response.error('Not found')
        }
    }

    create = async (request: IRequest, response: IResponse) => {
        try {
            const result = await this._repository.newUser(request.body)
            return response.success(result)
        } catch (error) {
            return response.error(error.message, 400, error.errors)
        }
    }

    paginate = async (request: IRequest, response: IResponse) => {
        try {
            const user = request.user

            const options = {
                page: request.params.page,
                limit: request.params.limit,
            }

            const query = request.query.filter
                ? JSON.parse(request.query.filter)
                : {}

            const result = await this._repository.paginate(query, options)
            return response.success(result)
        } catch (error) {
            return response.error(error.message)
        }
    }

    public search = async (request: IRequest, response: IResponse) => {
        try {
            const user = request.user
            const filter: any = { _id: { $ne: user._id } }
            if (request.query.search && request.query.search != '')
                filter.$or = [
                    { name: new RegExp(request.query.search, 'i') },
                    { email: new RegExp(request.query.search, 'i') },
                ]
            const peers = await this._repository.paginate(filter, {
                sort: { name: 1 },
                page: request.params.page,
                limit: request.params.limit,
            })
            return response.success(peers)
        } catch (error) {
            return response.error(error.message, 400, error.errors)
        }
    }

    remove = async (request: IRequest, response: IResponse) => {
        try {
            const user = await this._repository.findOne({
                _id: request.params.id,
            })
            if (user) {
                user.name = 'Deleted User'
                user.email = mongoose.Types.ObjectId()
                user.photo = undefined
                await user.save()
            }
            const result = await this._repository.softDelete(request.params.id)
            return response.success(result)
        } catch (error) {
            return response.error(error.message)
        }
    }
}
