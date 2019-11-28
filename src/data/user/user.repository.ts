import * as bcrypt from 'bcrypt-nodejs'
import * as moment from 'moment'
import * as uuid from 'uuid'
import BaseRepository from '../../infra/extensions/repository.extensions'
import { User } from './user.model'
import EventManager from '../../infra/events/event.manager'
import RecoverPassword from './events/recoverPassword.email'
import ValidateAccount from './events/validateAccount.email'

export default class UserRepository extends BaseRepository {
    private _new: any
    private eventManager: EventManager
    constructor() {
        super('users')
        const _new = new User()
        this.eventManager = EventManager.make()
    }

    public register = async (body: any) => {
        try {
            const user = await this.save({
                ...body,
                email: body.email.toLowerCase(),
                password: bcrypt.hashSync(
                    body.password,
                    bcrypt.genSaltSync(10)
                ),
            })

            return user
        } catch (error) {
            throw new Error(error)
        }
    }

    public login = async (body: any) => {
        try {
            const user = await this._model
                .findOne({ email: body.email.toLowerCase() })
                .select('+password')
            if (!user) throw new Error('No User Found')
            const passwordMatch = bcrypt.compareSync(
                body.password,
                user.password
            )
            if (passwordMatch === false) throw new Error('Invalid Password')
            return user
        } catch (error) {
            throw new Error(error)
        }
    }

    public logout = async (body: any) => {
        try {
            const user = await this._model.findOne({
                email: body.email.toLowerCase(),
            })
            if (!user) throw new Error('No User Found')
            return user
        } catch (error) {
            throw new Error(error)
        }
    }

    public recoverRequest = async (body: any) => {
        try {
            const user = await this._model.findOne({
                email: body.email.toLowerCase(),
            })
            if (user) {
                user.recover_token = uuid()
                user.recover_expiration = moment().add('day', 1)
                await user.save()
                this.eventManager.publish(
                    RecoverPassword.make(user.email, user.recover_token)
                )
                return true
            }
            throw new Error('User Not Found')
        } catch (error) {
            throw new Error(error)
        }
    }

    public resetPassword = async (body: any) => {
        try {
            const user = await this._model.findOne({
                email: body.email,
                recover_token: body.token,
            })
            if (user) {
                if (moment().isAfter(user.recover_expiration))
                    throw new Error('This token is no longer valid!')
                user.password = bcrypt.hashSync(
                    body.password,
                    bcrypt.genSaltSync(10)
                )
                user.recover_token = undefined
                user.recover_expiration = undefined
                await user.save()
                return true
            }
            throw new Error('Invalid recover token')
        } catch (error) {
            throw new Error(error)
        }
    }

    public changePassword = async (user: any, body: any) => {
        try {
            const result = await this.findByIdAndUpdate(user.id, {
                password: bcrypt.hashSync(
                    body.new_password,
                    bcrypt.genSaltSync(10)
                ),
            })
            return result
        } catch (error) {
            throw new Error(error)
        }
    }

    public resendValidation = async (email: string) => {
        try {
            const user = await this.findOrFail({ email })
            this.eventManager.publish(ValidateAccount.make(user))
            return user
        } catch (error) {
            throw new Error(error)
        }
    }

    public getFullUser = async (_id: string) => {
        try {
            const user = await this._model.findOne({ _id })
            if (!user) throw new Error('No User Found')
            return user
        } catch (error) {
            throw new Error(error)
        }
    }

    public getUserCredential = async (_id: string) => {
        try {
            const user = await this._model.findOne({ _id })
            if (!user) throw new Error('No User Found')
            return user
        } catch (error) {
            throw new Error(error)
        }
    }
}
