import BaseRepository from "../../infra/extensions/repository.extensions";
import BaseService from "../../infra/extensions/service.extensions";
import { Role } from "./role.model";
import RoleRepository from "./role.repository";

export default class RoleService extends BaseService {
  constructor() {
    super(new RoleRepository());
  }
}
