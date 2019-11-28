import { IResponse, IRequest } from '../../interfaces/custom-express'
import UserRepository from './../user/user.repository'

export default class AuthController {
    private _repository: UserRepository

    constructor() {
        this._repository = new UserRepository()
    }

    public login = async (request: IRequest, response: IResponse) => {
        try {
            const access = await this._repository.login(request.body)
            const token = await access.createAccessToken()
            const user = await this._repository.getFullUser(access._id)
            const result = {
                token,
                user,
            }

            return response.success(result)
        } catch (error) {
            return response.error(error.message, 401)
        }
    }

    public register = async (request: IRequest, response: IResponse) => {
        try {
            if (
                !request.body.role.includes('ADMIN') &&
                request.body.companies.length > 1
            ) {
                return response.error(
                    'This user cant have more than one company.',
                    400
                )
            }

            const access = await this._repository.register(request.body)

            const token = await access.createAccessToken()
            const user = await this._repository.getFullUser(access._id)
            const result = {
                token,
                user,
            }
            return response.success(result)
        } catch (error) {
            return response.error(error.message, 400)
        }
    }

    public logout = async (request: IRequest, response: IResponse) => {
        try {
            const access = await this._repository.logout(request.body)
            return response.success(access)
        } catch (error) {
            return response.error(error.message)
        }
    }

    public recover = async (request: IRequest, response: IResponse) => {
        try {
            const result = await this._repository.recoverRequest(request.body)
            return response.success(result)
        } catch (error) {
            return response.error(error.message)
        }
    }

    public resetPassword = async (request: IRequest, response: IResponse) => {
        try {
            const result = await this._repository.resetPassword(request.body)
            return response.success(result)
        } catch (error) {
            return response.error(error.message)
        }
    }

    public update = async (request: IRequest, response: IResponse) => {
        try {
            const data = request.body
            const result = await this._repository.findByIdAndUpdate(
                request.user.id,
                data
            )
            return response.success(result)
        } catch (error) {
            return response.error(error.message)
        }
    }

    public changePassword = async (request: IRequest, response: IResponse) => {
        try {
            const user = request.user
            const result = this._repository.changePassword(user, request.body)
            return response.success(result)
        } catch (error) {
            return response.error(error.message)
        }
    }
}
