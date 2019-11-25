import { IRequest, IResponse } from '../../interfaces/custom-express'
import UserRepository from '../user/user.repository'
import { Languages, Default } from '../../infra/extensions/languages.extensions'

export default class InfoController {
    public userRepository: UserRepository

    constructor() {
        this.userRepository = new UserRepository()
    }

    get = async (request: IRequest, response: IResponse) => {
        try {
            const result: any = {
                user: request.user
                    ? await this.userRepository.getFullUser(request.user)
                    : undefined,
                languages: Languages,
                default_language: Default,
            }
            return response.success(result)
        } catch (error) {
            return response.error(error.message)
        }
    }
}
