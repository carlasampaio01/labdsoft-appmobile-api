import { Strategy, ExtractJwt } from 'passport-jwt'
import UserRepository from '../../data/user/user.repository'

const userRepository = new UserRepository()

const jwtOptions = {
    secretOrKey: process.env.JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
}

const jwt = async (payload: any, done: Function) => {
    try {
        const user = await userRepository.getFullUser(payload.sub)
        if (user) return done(undefined, { payload, user })
        return done(undefined, false)
    } catch (error) {
        return done(error, false)
    }
}

export default {
    jwt: new Strategy(jwtOptions, jwt),
}
