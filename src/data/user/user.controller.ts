import { IResponse, IRequest } from '../../interfaces/custom-express';
import * as mongoose from 'mongoose';
import BaseController from '../../infra/extensions/controller.extensions';
import UserService from './user.service';

export default class UserController extends BaseController {
  constructor() {
    super(new UserService());
  }

  getUserCredential = async (request: IRequest, response: IResponse) => {
      return await this._service.getUserCredential(
        request.params.id
      );
  };

  create = async (request: IRequest, response: IResponse) => {
    return await this._service.newUser(request.body);
  };

  paginate = async (request: IRequest, response: IResponse) => {
    return await this._service.paginate(request);
  };

  public search = async (request: IRequest, response: IResponse) => {
    return await this._service.paginate(request);
  };

  remove = async (request: IRequest, response: IResponse) => {
    return await this._service.remove(request);
  };
}
