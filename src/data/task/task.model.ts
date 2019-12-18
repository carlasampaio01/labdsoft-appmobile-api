import * as mongoose from 'mongoose'
import { Languages, Default } from '../../infra/extensions/languages.extensions'
import * as mongooseIntl from 'mongoose-intl'
import * as mongoose_delete from 'mongoose-delete'
import UserRepository from '../user/user.repository'

const userRepository = new UserRepository()

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
        apiaries: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'apiaries',
                required: true,
            },
        ],
        completed: {
            type: Boolean,
            default: false,
        },
        company: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'companies',
            required: true,
        },
        users: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'users',
                required: true,
                validate: {
                    async: true,
                    validator: async function(v) {
                        const user = await userRepository.findById(v)
                        return user.role == 'APICULTOR'
                    },
                    message: `The user needs to have the role APICULTOR.`,
                },
            },
        ],
        state: [
            {
                type: String,
                enum: ['PENDENTE', 'REALIZADA', 'ADIADA', 'CANCELADA'],
                default: 'PENDENTE',
            },
        ],
        motive: {
            type: String,
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
