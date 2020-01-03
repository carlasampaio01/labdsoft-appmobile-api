import * as mongoose from 'mongoose'
import { Languages, Default } from '../../infra/extensions/languages.extensions'
import * as mongooseIntl from 'mongoose-intl'
import * as mongoose_delete from 'mongoose-delete'

export const VisitModel = new mongoose.Schema(
    {
        description: {
            type: String,
            required: 'Enter the description',
            intl: true,
        },
        type: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'task_types',
            required: true,
        },
        dates: [
            {
                type: Date,
                default: Date.now,
                required: true,
            },
        ],
        apiaries: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'apiaries',
                required: true,
            },
        ],
        company: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'companies',
            required: true,
        },
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
        timestamps: {
            type: Number,
            required: 'Enter the time',
            min: 1,
        },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
)

VisitModel.plugin(mongoose_delete, {
    deletedAt: true,
    deletedBy: true,
    overrideMethods: true,
})
VisitModel.plugin(mongooseIntl, {
    languages: Languages,
    defaultLanguage: Default,
    virtualObject: true,
})

export const Visit = mongoose.model('visits', VisitModel)
