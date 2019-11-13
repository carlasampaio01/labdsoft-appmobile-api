import BaseRepository from '../../infra/extensions/repository.extensions'
import BaseService from '../../infra/extensions/service.extensions'
import { TaskType } from './task_type.model'
import TaskTypeRepository from './task_type.repository'

export default class TaskTypeService extends BaseService {
    constructor() {
        super(new TaskTypeRepository())
    }
}
