import { IResponse, IRequest } from '../../interfaces/custom-express';
import * as mongoose from 'mongoose';
import BaseController from '../../infra/extensions/controller.extensions';
import UserService from './user.service';
import UserRepository from './user.repository';
import { User } from './user.model';

export default class UserController extends BaseController {
  constructor() {
    super(new UserService());
  }

  getUserCredential = async (request: IRequest, response: IResponse) => {
      return await this._service.getUserCredential(
        request.params.id
      );
  };


  find = async (request: IRequest, response: IResponse) => {
    try {
        const result = await this._service.find()
        return response.success(result )
    } catch (error) {
        return response.error(error.message)
    }
  
  }
  get = async (request: IRequest, response: IResponse) => {
    try {
        const result = await this._service.findById(request.params.id)
        return response.success(result)
    } catch (error) {
        return response.error('Not found')
    }
  }

  paginate = async (request: IRequest, response: IResponse) => {
    try {
        const options = {
            page: request.params.page,
            limit: request.params.limit,
        }

        const query = request.query.filter
            ? JSON.parse(request.query.filter)
            : {}

        const userRepo = new UserRepository();
        const result = await userRepo.paginate(query, options, false)
        return response.success(result)
    } catch (error) {
        return response.error(error.message)
    }
}

  public search = async (request: IRequest, response: IResponse) => {
    return await this._service.paginate(request);
  };

  remove = async (request: IRequest, response: IResponse) => {
    return await this._service.remove(request);
  };
}
