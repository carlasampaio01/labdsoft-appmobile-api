import { check } from 'express-validator'
import ValidateFields from '../../infra/middleware/validation.middleware'

const validations = {
    create: [check('nest').exists(),check('equipments_with_identification').exists(),check('equipments_without_identification').exists(),check('company').exists(), ValidateFields],
    edit: [check('nest').exists(), ValidateFields],
}

export default validations
