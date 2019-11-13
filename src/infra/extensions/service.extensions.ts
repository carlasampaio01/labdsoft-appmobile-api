import * as mongoose from "mongoose";
import * as lodash from "lodash";

export default abstract class BaseService {
  public _repository: any;

  constructor(repository: any) {
    this._repository = repository;
  }

  find = async (query?: Object, select?: Object, options?: Object) => {
    return await this._repository.find(query, select, options);
  };

  findOne = async (query?: Object, select?: Object, options?: Object) => {
    return await this._repository.findOne(query, select, options);
  };

  findById = async (id: string) => {
    return await this._repository.findById(id);
  };

  findOrFail = async (query?: Object, select?: Object, options?: Object) => {
    return await this.findOne(query, select, options);
  };

  save = async (data: any) => {
    return await this._repository.save(data);
  };

  findByIdAndUpdate = async (id: mongoose.Types.ObjectId, data: Object) => {
    const model = this._repository.findByIdAndUpdate(id, data, {
      new: true
    });
    if (model) return model;
  };

  updateMany = async (filter?: any, update?: any, options?: any) => {
    return await this._repository.updateMany(filter, update, options);
  };

  delete = async (id: mongoose.Types.ObjectId) => {
    if (this._repository.remove) {
      return await this._repository.remove({ _id: id });
    }
    throw new Error("Activate Soft Deletes on Model");
  };

  softDelete = async (id: mongoose.Types.ObjectId) => {
    return await this._repository.delete({ _id: id });
  };

  restore = async (id: mongoose.Types.ObjectId) => {
    return await this._repository.restore({ _id: id });
  };

  deleteMany = async (query: Object) => this._repository.deleteMany(query);
  deleteOne = async (query: Object) => this._repository.deleteMany(query);

  paginate = async (
    query: Object = {},
    options: any = {},
    withDeleted: boolean = false
  ) => this._repository.paginate(query, options, withDeleted);

  count = async (query?: Object, options?: Object) =>
    this._repository.count(query, options);

  public defaultPopulate = async (query: any) =>
    this._repository.defaultPopulate(query);

  public defaultSort = async (query: any) =>
    this._repository.defaultSort(query);

  private sortChildren = (results: any, children: Object) =>
    this._repository.sortChildren(results, children);

  private sortArray = (result: Object, steps: Array<string>, value: number) =>
    this._repository.sortArray(result, steps, value);

  private compare = (value: string, order: number) =>
    this._repository.compare(value, order);
}
