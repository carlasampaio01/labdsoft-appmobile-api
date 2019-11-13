import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as passport from 'passport'
import * as mongoose from 'mongoose'
import * as multer from 'multer'
import * as cors from 'cors'
import ApiRoutes from './routes/api'
import CostumeResponse from './infra/extensions/response.extensions'
import passportExtension from './infra/extensions/passport.extensions'

class App {
    public app: any

    constructor() {
        this.app = express()
        this.config()
        this.mongoSetup()
    }

    private config(): void {
        this.app.use(cors())
        this.app.use(bodyParser.json({ limit: '50mb' }))
        this.app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }))
        const memory = multer.diskStorage({})
        this.app.use(multer({ dest: '/temp', storage: memory }).any())

        this.app.response.success = CostumeResponse.success
        this.app.response.error = CostumeResponse.error

        passport.use('jwt', passportExtension.jwt)
        this.app.use('/api', ApiRoutes)
    }

    private mongoSetup = async () => {
        ;(<any>mongoose).Promise = global.Promise
        mongoose.set('useCreateIndex', true)
        mongoose.set('useFindAndModify', false)

        const url = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`

        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    }
}

export default new App().app
