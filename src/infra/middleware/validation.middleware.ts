import { validationResult } from 'express-validator'
import { IResponse, IRequest } from '../../interfaces/custom-express'

const ValidateFields = (
    request: IRequest,
    response: IResponse,
    next: Function
) => {
    const errors = validationResult(request)
    if (!errors.isEmpty()) {
        return response.error(
            'Tha data failed to pass validation',
            400,
            errors.array()
        )
    } else next()
}

export default ValidateFields
