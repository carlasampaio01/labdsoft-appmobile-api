import * as passport from 'passport'
import { IResponse, IRequest } from '../../interfaces/custom-express'

const handleJWT = (
    request: IRequest,
    response: IResponse,
    next: Function
) => async (err: any, data: any, info: any) => {
    const { logIn } = request
    const { user } = data
    try {
        if (!user) {
            return response.error('Invalid Authorization Token', 401)
        }
        logIn(user, { session: false }, undefined)
        request.user = user
        return next()
    } catch (e) {
        response.error('Auth Middleware Error', 400)
    }
}

export default () => (request: IRequest, response: IResponse, next: Function) =>
    passport.authenticate(
        'jwt',
        { session: false },
        handleJWT(request, response, next)
    )(request, response, next)
