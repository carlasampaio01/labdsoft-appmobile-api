import BaseRepository from '../../infra/extensions/repository.extensions'
import { Company } from './company.model'

export default class CompanyRepository extends BaseRepository {
    private _new: Document
    constructor() {
        const _new = new Company()
        super('companies')
        this._order = { description: 1 }
    }
}
