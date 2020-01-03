import BaseRepository from '../../infra/extensions/repository.extensions'
import BaseService from '../../infra/extensions/service.extensions'
import { Visit } from './visit.model'
import VisitRepository from './visit.repository'
import { IResponse, IRequest } from '../../interfaces/custom-express'
import TaskService from '../task/task.service'

export default class VisitService extends BaseService {
    constructor() {
        super(new VisitRepository())
    }

    generateVisit = async (request: IRequest, response: IResponse) => {
        const taskService = new TaskService()

        const tasks = await taskService.findByDateAndUser(
            request.body.date,
            request.user.id
        )
    }
}
