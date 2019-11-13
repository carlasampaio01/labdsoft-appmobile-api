import 'dotenv/config'
import app from './app'

const PORT = process.env.PORT || 3000

const http = require('http').Server(app)

const expressSwagger = require('express-swagger-generator')(app)

const options = {
    swaggerDefinition: {
        info: {
            description: 'This is a sample server',
            title: 'Swagger',
            version: '1.0.0',
        },
        host: `localhost:${PORT}`,
        basePath: '/api',
        produces: ['application/json', 'application/xml'],
        schemes: ['http', 'https'],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: '',
            },
        },
    },
    basedir: __dirname,
    files: ['./**/*.ts'],
}

expressSwagger(options)

http.listen(process.env.PORT || 3000, () => {
    console.log('Express server listening on port ' + PORT)
})
