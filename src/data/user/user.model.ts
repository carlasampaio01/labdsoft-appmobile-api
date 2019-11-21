import * as mongoose from 'mongoose'
import * as moment from 'moment'
import * as jwt from 'jwt-simple'
import * as mongoose_delete from 'mongoose-delete'

export interface IUser {
    id: mongoose.Types.ObjectId
    name: string
    email: string
    password: string
    photo: string
}

export const UserModel = new mongoose.Schema(
    {
        name: {
            type: String,
            required: 'Enter the name',
        },
        email: {
            type: String,
            unique: true,
            required: 'Enter an valid email',
        },
        password: {
            type: String,
            select: false,
            required: 'Create a password',
        },
        birth: {
            type: String,
        },
        nationality: {
            type: String,
        },
        recover_token: {
            type: String,
        },
        recover_expiration: {
            type: Date,
        },
        role: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'roles',
            required: true,
        },
        companies: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'companies',
                required: true,
            },
        ],
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
)

UserModel.methods.createAccessToken = function() {
    try {
        const { JWT_EXPIRATION_INTERVAL, JWT_SECRET } = process.env
        const payload = {
            exp: moment()
                .add(JWT_EXPIRATION_INTERVAL, 'minutes')
                .unix(),
            iat: moment().unix(),
            sub: this._id,
        }
        return jwt.encode(payload, JWT_SECRET)
    } catch (error) {
        throw new Error(error)
    }
}

UserModel.plugin(mongoose_delete, {
    deletedAt: true,
    deletedBy: true,
    overrideMethods: true,
})

export const User = mongoose.model('users', UserModel)
