import BaseRepository from "../../infra/extensions/repository.extensions";
import { Role } from "./role.model";

export default class RoleRepository extends BaseRepository {
  private _new: Document;
  constructor() {
    const _new = new Role();
    super("roles");
  }
}
