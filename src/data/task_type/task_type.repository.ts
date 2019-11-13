import BaseRepository from '../../infra/extensions/repository.extensions'
import { TaskType } from './task_type.model'

export default class TaskTypeRepository extends BaseRepository {
    private _new: Document
    constructor() {
        const _new = new TaskType()
        super('task_types')
        this._order = { description: 1 }
    }
}
