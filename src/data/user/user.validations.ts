import { check } from 'express-validator'
import ValidateFields from '../../infra/middleware/validation.middleware'
import Authenticated from '../../infra/middleware/auth.middleware'

const validations = {
    create: [Authenticated(), check('name').exists(), ValidateFields],
    edit: [Authenticated(), check('name').exists(), ValidateFields],
    authenticated: [Authenticated()],
}

export default validations
