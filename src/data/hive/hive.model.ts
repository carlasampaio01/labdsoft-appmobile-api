import * as mongoose from 'mongoose'
import { Languages, Default } from '../../infra/extensions/languages.extensions'
import * as mongooseIntl from 'mongoose-intl'
import * as mongoose_delete from 'mongoose-delete'

export const HiveModel = new mongoose.Schema(
    {
        nest: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'equipments_with_identification',
            required: true,
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

HiveModel.plugin(mongoose_delete, {
    deletedAt: true,
    deletedBy: true,
    overrideMethods: true,
})
HiveModel.plugin(mongooseIntl, {
    languages: Languages,
    defaultLanguage: Default,
    virtualObject: true,
})

export const Hive = mongoose.model('hives', HiveModel)
