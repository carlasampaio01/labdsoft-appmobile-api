import * as mongoose from 'mongoose'
import { Languages, Default } from '../../infra/extensions/languages.extensions'
import * as mongooseIntl from 'mongoose-intl'
import * as mongoose_delete from 'mongoose-delete'

export const TaskModel = new mongoose.Schema(
    {
        description: {
            type: String,
            required: 'Enter the description',
            intl: true,
        },
        date: { type: Date, default: Date.now },
        type: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'task_types',
            required: true,
        },
        apiaries: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'apiaries',
            required: true,
        }],
        completed: {
            type: Boolean,
            default: false,
        },
        company: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'companies',
            required: true,
        },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
)

TaskModel.plugin(mongoose_delete, {
    deletedAt: true,
    deletedBy: true,
    overrideMethods: true,
})
TaskModel.plugin(mongooseIntl, {
    languages: Languages,
    defaultLanguage: Default,
    virtualObject: true,
})

export const Task = mongoose.model('tasks', TaskModel)
