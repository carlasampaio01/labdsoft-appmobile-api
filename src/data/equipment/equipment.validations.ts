import { check } from 'express-validator/check'
import ValidateFields from '../../infra/middleware/validation.middleware'

const validations = {
    create: [
        check('description').exists(),
        check('identifier').exists(),
        check('type').exists(),
        check('quantity').exists(),
        ValidateFields,
    ],
    edit: [
        check('description').exists(),
        check('identifier').exists(),
        check('type').exists(),
        check('quantity').exists(),
        ValidateFields,
    ],
}

export default validations
