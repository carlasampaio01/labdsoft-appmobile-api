import { Response, Request } from 'express';

export interface IResponse extends Response {
  error: Function;
  success: Function;
}

export interface IRequest extends Request {
  user: any;
}
