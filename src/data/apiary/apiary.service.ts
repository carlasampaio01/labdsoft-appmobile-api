import BaseRepository from '../../infra/extensions/repository.extensions'
import BaseService from '../../infra/extensions/service.extensions'
import { Apiary } from './apiary.model'
import ApiaryRepository from './apiary.repository'

export default class ApiaryService extends BaseService {
    constructor() {
        super(new ApiaryRepository())
    }

    nearest = async (id: string) => {
        return 'none'
    }
}
