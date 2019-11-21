import { IResponse, IRequest } from '../../interfaces/custom-express'

export const isAdmin = () => (
    request: IRequest,
    response: IResponse,
    next: Function
) => {
    if (request.user.role.description == 'admin') {
        return next()
    } else {
        return response.error('Needs admin permission to do this operation.')
    }
}

export const isOperator = () => (
    request: IRequest,
    response: IResponse,
    next: Function
) => {
    if (
        request.user.role.description == 'operator' ||
        request.user.role.description == 'admin'
    ) {
        return next()
    } else {
        return response.error(
            'Needs operator or admin permission to do this operation.'
        )
    }
}

export const isManager = () => (
    request: IRequest,
    response: IResponse,
    next: Function
) => {
    if (
        request.user.role.description == 'manager' ||
        request.user.role.description == 'admin'
    ) {
        return next()
    } else {
        return response.error(
            'Needs manager or admin permission to do this operation.'
        )
    }
}

export const ownsCompany = () => (
    request: IRequest,
    response: IResponse,
    next: Function
) => {
    if (request.user.companies.includes(request.body.company)) {
        return next()
    } else {
        return response.error(
            'This user doesnt has permissions to the selected company.'
        )
    }
}
