import { check } from 'express-validator'
import ValidateFields from '../../infra/middleware/validation.middleware'

const validations = {
    create: [check('description').exists(), ValidateFields],
    edit: [check('description').exists(), ValidateFields],
}

export default validations
