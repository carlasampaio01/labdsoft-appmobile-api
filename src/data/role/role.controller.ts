import RoleService from "./role.service";
import BaseController from "../../infra/extensions/controller.extensions";

export default class RoleController extends BaseController {
  constructor() {
    super(new RoleService());
  }
}
