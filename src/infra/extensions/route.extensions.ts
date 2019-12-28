import { Router } from 'express'
import Authenticated from '../middleware/auth.middleware'
import {
    isAdmin,
    isManager,
    isOperator,
    ownsCompany,
} from '../middleware/permissions.middleware'

const UndefinedRoute = (request: any, response: any) => {
    response.error('Method Undefined', 501)
}

export const RouteMakerAdmin = (
    router: Router,
    controller: any,
    validations?: any
) => {
    router.get(
        '/',
        Authenticated(),
        isAdmin(),
        validations && validations.find ? validations.find : [],
        controller.find || UndefinedRoute
    )
    router.get(
        '/:id',
        Authenticated(),
        isAdmin(),
        validations && validations.get ? validations.get : [],
        controller.get || UndefinedRoute
    )
    router.get(
        '/:page/:limit',
        Authenticated(),
        isAdmin(),
        validations && validations.paginate ? validations.paginate : [],
        controller.paginate || UndefinedRoute
    )
    router.post(
        '/',
        Authenticated(),
        isAdmin(),
        ownsCompany(),
        validations && validations.create ? validations.create : [],
        controller.create || UndefinedRoute
    )
    router.put(
        '/:id',
        Authenticated(),
        isAdmin(),
        ownsCompany(),
        validations && validations.edit ? validations.edit : [],
        controller.edit || UndefinedRoute
    )
    router.delete(
        '/:id',
        Authenticated(),
        isAdmin(),
        ownsCompany(),
        validations && validations.remove ? validations.remove : [],
        controller.remove || UndefinedRoute
    )
    router.put(
        '/:id/recover',
        Authenticated(),
        isAdmin(),
        ownsCompany(),
        validations && validations.recover ? validations.recover : [],
        controller.recover || UndefinedRoute
    )
}

export const RouteMakerUser = (
    router: Router,
    controller: any,
    validations?: any
) => {
    router.get(
        '/',
        Authenticated(),
        isAdmin(),
        validations && validations.find ? validations.find : [],
        controller.find || UndefinedRoute
    )
    router.get(
        '/:id',
        Authenticated(),
        isAdmin(),
        validations && validations.get ? validations.get : [],
        controller.get || UndefinedRoute
    )
    router.post(
        '/',
        Authenticated(),
        isAdmin(),
        ownsCompany(),
        validations && validations.create ? validations.create : [],
        controller.create || UndefinedRoute
    )
    router.put(
        '/:id',
        Authenticated(),
        isAdmin(),
        ownsCompany(),
        validations && validations.edit ? validations.edit : [],
        controller.edit || UndefinedRoute
    )
    router.delete(
        '/:id',
        Authenticated(),
        isAdmin(),
        ownsCompany(),
        validations && validations.remove ? validations.remove : [],
        controller.remove || UndefinedRoute
    )
    router.put(
        '/:id/recover',
        Authenticated(),
        isAdmin(),
        ownsCompany(),
        validations && validations.recover ? validations.recover : [],
        controller.recover || UndefinedRoute
    )
    router.get(
        '/:page/:limit',
        Authenticated(),
        isAdmin(),
        validations && validations.paginate ? validations.paginate : [],
        controller.paginate || UndefinedRoute
    )
}

export const RouteMakerTask = (
    router: Router,
    controller: any,
    validations?: any
) => {
    router.get(
        '/',
        Authenticated(),
        validations && validations.find ? validations.find : [],
        controller.find || UndefinedRoute
    )
    router.get(
        '/:id',
        Authenticated(),
        validations && validations.get ? validations.get : [],
        controller.get || UndefinedRoute
    )
    router.get(
        '/:page/:limit',
        Authenticated(),
        validations && validations.paginate ? validations.paginate : [],
        controller.paginate || UndefinedRoute
    )
    router.post(
        '/',
        Authenticated(),
        isManager(),
        ownsCompany(),
        validations && validations.create ? validations.create : [],
        controller.create || UndefinedRoute
    )
    router.put(
        '/:id',
        Authenticated(),
        isOperator(),
        ownsCompany(),
        validations && validations.edit ? validations.edit : [],
        controller.edit || UndefinedRoute
    )
    router.delete(
        '/:id',
        Authenticated(),
        ownsCompany(),
        validations && validations.remove ? validations.remove : [],
        controller.remove || UndefinedRoute
    )
}

const RouteMaker = (router: Router, controller: any, validations?: any) => {
    router.get(
        '/',
        Authenticated(),
        validations && validations.find ? validations.find : [],
        controller.find || UndefinedRoute
    )
    router.get(
        '/:id',
        Authenticated(),
        validations && validations.get ? validations.get : [],
        controller.get || UndefinedRoute
    )
    router.get(
        '/:page/:limit',
        Authenticated(),
        validations && validations.paginate ? validations.paginate : [],
        controller.paginate || UndefinedRoute
    )
    router.post(
        '/',
        Authenticated(),
        ownsCompany(),
        validations && validations.create ? validations.create : [],
        controller.create || UndefinedRoute
    )
    router.put(
        '/:id',
        Authenticated(),
        ownsCompany(),
        validations && validations.edit ? validations.edit : [],
        controller.edit || UndefinedRoute
    )
    router.delete(
        '/:id',
        Authenticated(),
        ownsCompany(),
        validations && validations.remove ? validations.remove : [],
        controller.remove || UndefinedRoute
    )
    router.put(
        '/:id/recover',
        Authenticated(),
        ownsCompany(),
        validations && validations.recover ? validations.recover : [],
        controller.recover || UndefinedRoute
    )
}

export const RouteMakerEquipmentsWithIdentification = (
    router: Router,
    controller: any,
    validations?: any
) => {
    router.get(
        '/',
        Authenticated(),
        validations && validations.find ? validations.find : [],
        controller.find || UndefinedRoute
    )
    router.get(
        '/:id/qrcode',
        Authenticated(),
        validations && validations.find ? validations.find : [],
        controller.getQrcode || UndefinedRoute
    )
    router.get(
        '/:id',
        Authenticated(),
        validations && validations.get ? validations.get : [],
        controller.get || UndefinedRoute
    )
    router.post(
        '/',
        Authenticated(),
        ownsCompany(),
        validations && validations.create ? validations.create : [],
        controller.create || UndefinedRoute
    )
    router.put(
        '/:id',
        Authenticated(),
        ownsCompany(),
        validations && validations.edit ? validations.edit : [],
        controller.edit || UndefinedRoute
    )
    router.delete(
        '/:id',
        Authenticated(),
        ownsCompany(),
        validations && validations.remove ? validations.remove : [],
        controller.remove || UndefinedRoute
    )
    router.put(
        '/:id/recover',
        Authenticated(),
        ownsCompany(),
        validations && validations.recover ? validations.recover : [],
        controller.recover || UndefinedRoute
    )
}

export const RouteMakerApiary = (
    router: Router,
    controller: any,
    validations?: any
) => {
    router.get(
        '/',
        Authenticated(),
        validations && validations.find ? validations.find : [],
        controller.find || UndefinedRoute
    )
    router.get(
        '/:id/qrcode',
        Authenticated(),
        validations && validations.find ? validations.find : [],
        controller.getQrcode || UndefinedRoute
    )
    router.get(
        '/get/:id',
        Authenticated(),
        validations && validations.get ? validations.get : [],
        controller.get || UndefinedRoute
    )
    router.post(
        '/',
        Authenticated(),
        ownsCompany(),
        validations && validations.create ? validations.create : [],
        controller.create || UndefinedRoute
    )
    router.post(
        '/addhive/',
        Authenticated(),
        controller.addHive || UndefinedRoute
    )
    router.put(
        '/:id',
        Authenticated(),
        ownsCompany(),
        validations && validations.edit ? validations.edit : [],
        controller.edit || UndefinedRoute
    )
    router.delete(
        '/:id',
        Authenticated(),
        ownsCompany(),
        validations && validations.remove ? validations.remove : [],
        controller.remove || UndefinedRoute
    )
    router.put(
        '/:id/recover',
        Authenticated(),
        ownsCompany(),
        validations && validations.recover ? validations.recover : [],
        controller.recover || UndefinedRoute
    )
}

export default RouteMaker
