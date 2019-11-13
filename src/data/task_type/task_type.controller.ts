import TaskTypeService from './task_type.service'
import BaseController from '../../infra/extensions/controller.extensions'

export default class TaskTypeController extends BaseController {
    constructor() {
        super(new TaskTypeService())
    }
}
