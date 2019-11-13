import HiveService from './hive.service'
import BaseController from '../../infra/extensions/controller.extensions'

export default class HiveController extends BaseController {
    constructor() {
        super(new HiveService())
    }
}
