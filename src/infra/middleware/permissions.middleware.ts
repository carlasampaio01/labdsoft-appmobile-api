import { IResponse, IRequest } from '../../interfaces/custom-express'
import { bool } from 'joi'

export const isAdmin = () => (
    request: IRequest,
    response: IResponse,
    next: Function
) => {
    if (request.user.role.includes('ADMIN')) {
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
    if (request.body.companies !== undefined) {
        let contains = false
        request.user.companies.forEach(element => {
            request.body.companies.forEach(element2 => {
                if (element == element2) {
                    contains = true
                }
            })
        })
        if (contains) return next()
    }

    if (request.user.companies.includes(request.body.company)) {
        return next()
    } else {
        return response.error(
            'This user doesnt has permissions to the selected company.'
        )
    }
}
