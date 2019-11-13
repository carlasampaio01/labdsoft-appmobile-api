import * as mongoose from 'mongoose'
import { Languages, Default } from '../../infra/extensions/languages.extensions'
import * as mongooseIntl from 'mongoose-intl'
import * as mongoose_delete from 'mongoose-delete'

export const EquipmentTypeModel = new mongoose.Schema(
    {
        description: {
            type: String,
            required: 'Enter the description',
            intl: true,
        },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
)

EquipmentTypeModel.plugin(mongoose_delete, {
    deletedAt: true,
    deletedBy: true,
    overrideMethods: true,
})
EquipmentTypeModel.plugin(mongooseIntl, {
    languages: Languages,
    defaultLanguage: Default,
    virtualObject: true,
})

export const EquipmentType = mongoose.model(
    'equipment_types',
    EquipmentTypeModel
)
