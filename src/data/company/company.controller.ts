import CompanyService from './company.service'
import BaseController from '../../infra/extensions/controller.extensions'

export default class CompanyController extends BaseController {
    constructor() {
        super(new CompanyService())
    }
}
