import * as mongoose from 'mongoose'
import { Languages, Default } from '../../infra/extensions/languages.extensions'
import * as mongooseIntl from 'mongoose-intl'
import * as mongoose_delete from 'mongoose-delete'

export const TaskTypeModel = new mongoose.Schema(
    {
        description: {
            type: String,
            required: 'Enter the description',
            intl: true,
        },
        company: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'companies',
            required: true,
        },
        type: {
            type: String,
            enum: ['SIMPLE', 'MULTIPLE'],
            default: 'SIMPLE',
        },
        equipments_with_identification: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'equipments_with_identification',
            },
        ],
        equipments_without_identification: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'equipments_without_identification',
            },
        ],
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
)

TaskTypeModel.plugin(mongoose_delete, {
    deletedAt: true,
    deletedBy: true,
    overrideMethods: true,
})
TaskTypeModel.plugin(mongooseIntl, {
    languages: Languages,
    defaultLanguage: Default,
    virtualObject: true,
})

export const TaskType = mongoose.model('task_types', TaskTypeModel)
