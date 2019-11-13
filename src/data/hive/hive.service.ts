import BaseRepository from '../../infra/extensions/repository.extensions'
import BaseService from '../../infra/extensions/service.extensions'
import { Hive } from './hive.model'
import HiveRepository from './hive.repository'

export default class HiveService extends BaseService {
    constructor() {
        super(new HiveRepository())
    }
}
