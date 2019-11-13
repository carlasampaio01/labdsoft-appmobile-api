import * as moment from 'moment';

class ResponseEnvelope {
  public data: Object;
  public success: Boolean;
  public message: String;
  public occured_in: String;

  static create = (
    data: Object = undefined,
    success: Boolean,
    message: String = ''
  ) => new ResponseEnvelope(data, success, message);

  constructor(data: Object, success: Boolean, message: String) {
    this.data = data;
    this.success = success;
    this.message = message;
    this.occured_in = moment().format('DD-MM-YYYY HH:mm:ss');
  }
}

function success(data: Object) {
  const response = ResponseEnvelope.create(data, true);
  return this.send(response);
}

function error(message: String, status?: Number, data?: Object) {
  const response = ResponseEnvelope.create(data, false, message);
  this.status(status || 400);
  return this.send(response);
}

export default {
  success,
  error
};
