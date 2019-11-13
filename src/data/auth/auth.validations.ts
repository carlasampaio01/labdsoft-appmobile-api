import { check } from 'express-validator/check';
import ValidateFields from '../../infra/middleware/validation.middleware';
import FormData from '../../infra/middleware/formdata.middleware';
import Authenticated from '../../infra/middleware/auth.middleware';
import { IResponse, IRequest } from '../../interfaces/custom-express';

const validatePassword = () => (
  request: IRequest,
  response: IResponse,
  next: Function
) => {
  try {
    if (!request.body.new_password) throw new Error('Password not sent!');

    if (!request.body.repeat_password)
      throw new Error('Password repetition not sent!');

    if (request.body.new_password !== request.body.repeat_password)
      throw new Error('The passwords do not match!');

    return next();
  } catch (error) {
    return response.error(error.message, 400);
  }
};

const validations = {
  register: [
    check('email').isEmail(),
    check('name').isString(),
    check('password').isLength({ min: 6 }),
    ValidateFields
  ],
  login: [
    check('email').isEmail(),
    check('password').isLength({ min: 6 }),
    ValidateFields
  ],
  logout: [
    check('email').isEmail(),
    check('device').isString(),
    ValidateFields
  ],
  recover: [check('email').isEmail(), ValidateFields],
  reset: [
    check('email').isEmail(),
    check('token').isString(),
    check('password').isLength({ min: 6 }),
    ValidateFields
  ],
  update: [
    Authenticated(),
    check('email').isEmail(),
    check('name').isString(),
    ValidateFields
  ],
  changePassword: [Authenticated(), validatePassword(), ValidateFields],
  photo: [Authenticated(), FormData],
  authenticated: [Authenticated()],
  validateAccount: [check('email').isEmail(), check('id'), ValidateFields]
};

export default validations;
