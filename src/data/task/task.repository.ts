import BaseRepository from '../../infra/extensions/repository.extensions'
import { Task } from './task.model'
import * as mongoose from 'mongoose'
import * as moment from 'moment'

export default class TaskRepository extends BaseRepository {
    private _new: Document
    constructor() {
        super('tasks')
        const _new = new Task()
        this._order = { description: 1 }
        this._with = [{ path: 'apiaries' }]
    }

    findByDateAndUser = async (
        date: string,
        userId: mongoose.Types.ObjectId
    ) => {
        const dayAfter = new Date(
            new Date(date + 'T00:00:00.000Z').setDate(
                new Date(date + 'T00:00:00.000Z').getDate() + 1
            )
        )

        const method = this._model.find({
            dates: {
                $gte: new Date(date + 'T00:00:00.000Z'),
                $lt: dayAfter,
            },
            users: {
                $in: userId,
            },
        })
        return await this.defaultPopulate(method)
    }
}
