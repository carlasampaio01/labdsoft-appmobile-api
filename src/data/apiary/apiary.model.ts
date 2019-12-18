import * as mongoose from 'mongoose'
import { Languages, Default } from '../../infra/extensions/languages.extensions'
import * as mongooseIntl from 'mongoose-intl'
import * as mongoose_delete from 'mongoose-delete'

export const ApiaryModel = new mongoose.Schema(
    {
        description: {
            type: String,
            required: 'Enter the description',
            intl: true,
        },
        coordinates: {
            latitude: {
                type: String,
                required: 'Enter the latitude',
            },
            longitude: {
                type: String,
                required: 'Enter the longitude',
            },
        },
        address: {
            type: String,
        },
        hives: [
            {
                hive: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'hives',
                    required: 'Enter the hive',
                },
                info: [
                    {
                        type: String,
                        enum: ['DESDOBRAMENTO', 'COMPRA', 'CAPTURA', 'MUDANÇA'],
                        default: 'DESDOBRAMENTO',
                    },
                ],
                hive_original: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'hives',
                    required: 'Enter the original hive',
                },
                is_deleted: {
                    type: Boolean,
                    default: false,
                },
                motive: {
                    type: String,
                    enum: ['PILHAGEM', 'DOENÇA', 'VENDA'],
                    default: 'DOENÇA',
                },
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

ApiaryModel.plugin(mongoose_delete, {
    deletedAt: true,
    deletedBy: true,
    overrideMethods: true,
})
ApiaryModel.plugin(mongooseIntl, {
    languages: Languages,
    defaultLanguage: Default,
    virtualObject: true,
})

export const Apiary = mongoose.model('apiaries', ApiaryModel)
