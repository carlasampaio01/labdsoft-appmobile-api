import * as mongoose from 'mongoose'
import { Languages, Default } from '../../infra/extensions/languages.extensions'
import * as mongooseIntl from 'mongoose-intl'
import * as mongoose_delete from 'mongoose-delete'

export const EquipmentModel = new mongoose.Schema(
    {
        description: {
            type: String,
            required: 'Enter the description',
            intl: true,
        },
        identifier: {
            type: String,
            unique: true,
        },
        quantity: {
            type: Number,
            required: 'Enter the quantity',
            min: 1,
        },
        type: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'equipment_types',
            required: true,
        },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
)

EquipmentModel.plugin(mongoose_delete, {
    deletedAt: true,
    deletedBy: true,
    overrideMethods: true,
})
EquipmentModel.plugin(mongooseIntl, {
    languages: Languages,
    defaultLanguage: Default,
    virtualObject: true,
})

export const Equipment = mongoose.model('equipments', EquipmentModel)
