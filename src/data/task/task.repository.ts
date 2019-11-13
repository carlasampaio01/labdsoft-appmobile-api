import BaseRepository from '../../infra/extensions/repository.extensions'
import { Task } from './task.model'

export default class TaskRepository extends BaseRepository {
    private _new: Document
    constructor() {
        const _new = new Task()
        super('tasks')
        this._order = { description: 1 }
    }
}
