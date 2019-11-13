import { check } from 'express-validator/check'
import ValidateFields from '../../infra/middleware/validation.middleware'

const validations = {
    create: [
        check('description').exists(),
        check('task_type').exists(),
        check('apiaries').exists(),
        ValidateFields,
    ],
    edit: [
        check('description').exists(),
        check('task_type').exists(),
        check('apiaries').exists(),
        ValidateFields,
    ],
}

export default validations
