import * as mongoose from 'mongoose'
import { Languages, Default } from '../../infra/extensions/languages.extensions'
import * as mongooseIntl from 'mongoose-intl'
import * as mongoose_delete from 'mongoose-delete'

export const EquipmentWithoutIdentificationModel = new mongoose.Schema(
    {
        description: {
            type: String,
            enum: ['ALIMENTADOR', 'CAPTA-POLÉN', 'FUMIGADOR'],
            default: 'APICULTOR',
        },
        quantity: {
            type: Number,
            required: 'Enter the quantity',
            min: 1,
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

EquipmentWithoutIdentificationModel.plugin(mongoose_delete, {
    deletedAt: true,
    deletedBy: true,
    overrideMethods: true,
})
EquipmentWithoutIdentificationModel.plugin(mongooseIntl, {
    languages: Languages,
    defaultLanguage: Default,
    virtualObject: true,
})

export const EquipmentWithoutIdentification = mongoose.model(
    'equipments_without_identification',
    EquipmentWithoutIdentificationModel
)
