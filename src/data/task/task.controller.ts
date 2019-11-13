import TaskService from './task.service'
import BaseController from '../../infra/extensions/controller.extensions'

export default class TaskController extends BaseController {
    constructor() {
        super(new TaskService())
    }
}
