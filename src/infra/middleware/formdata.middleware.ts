import { IResponse, IRequest } from '../../interfaces/custom-express';

const FormData = (request: IRequest, response: IResponse, next: Function) => {
  request.files
    ? next()
    : response.error('The request is not multipart/form-data');
};

export default FormData;
