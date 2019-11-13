import BaseRepository from '../../infra/extensions/repository.extensions'
import BaseService from '../../infra/extensions/service.extensions'
import { Task } from './task.model'
import TaskRepository from './task.repository'

export default class TaskService extends BaseService {
    constructor() {
        super(new TaskRepository())
    }
}
