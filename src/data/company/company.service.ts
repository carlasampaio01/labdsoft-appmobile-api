import BaseRepository from '../../infra/extensions/repository.extensions'
import BaseService from '../../infra/extensions/service.extensions'
import { Company } from './company.model'
import CompanyRepository from './company.repository'

export default class CompanyService extends BaseService {
    constructor() {
        super(new CompanyRepository())
    }
}
