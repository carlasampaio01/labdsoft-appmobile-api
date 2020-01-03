import BaseRepository from '../../infra/extensions/repository.extensions'
import BaseService from '../../infra/extensions/service.extensions'
import { Task } from './task.model'
import TaskRepository from './task.repository'
import * as mongoose from 'mongoose'

export default class TaskService extends BaseService {
    constructor() {
        super(new TaskRepository())
    }

    findByDateAndUser = async (
        date: string,
        userId: mongoose.Types.ObjectId
    ) => {
        return await this._repository.findByDateAndUser(date, userId)
    }
}
