import * as mongoose from 'mongoose'
import { Languages, Default } from '../../infra/extensions/languages.extensions'
import * as mongooseIntl from 'mongoose-intl'
import * as mongoose_delete from 'mongoose-delete'

export const CalendarModel = new mongoose.Schema(
    {
        description: {
            type: String,
            required: 'Enter the description',
            intl: true,
        },
        tasks: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'tasks',
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

CalendarModel.plugin(mongoose_delete, {
    deletedAt: true,
    deletedBy: true,
    overrideMethods: true,
})
CalendarModel.plugin(mongooseIntl, {
    languages: Languages,
    defaultLanguage: Default,
    virtualObject: true,
})

export const Calendar = mongoose.model('calendars', CalendarModel)
