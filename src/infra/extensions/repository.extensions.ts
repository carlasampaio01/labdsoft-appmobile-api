import * as mongoose from 'mongoose'
import * as lodash from 'lodash'

export default abstract class BaseRepository {
    public _model: any
    public _with: Array<any>
    public _order: Object

    constructor(model: string) {
        this._model = mongoose.model(model)
        this._with = []
        this._order = []
    }

    find = async (query?: Object, select?: Object, options?: Object) => {
        const method = this._model.find(query, select, options)
        return await this.defaultPopulate(method)
    }

    findOne = async (query?: Object, select?: Object, options?: Object) => {
        const method = this._model.findOne(query, select, options)
        return await this.defaultPopulate(method)
    }

    findById = async (id: string) => {
        try {
            const method = this._model.findById(id)
            return await this.defaultPopulate(method)
        } catch (error) {
            if (error.reason == undefined) {
                throw new Error('Not Found')
            }
            throw new Error(error)
        }
    }

    findOrFail = async (query?: Object, select?: Object, options?: Object) => {
        try {
            const entity = await this.findOne(query, select, options)
            if (entity) return entity
            throw new Error(`${this._model.modelName} not found!`)
        } catch (error) {
            if (error.reason == undefined) {
                throw new Error(`${this._model.modelName} not found!`)
            }
            throw new Error(error)
        }
    }

    save = async (data: any) => {
        try {
            delete data.id
            delete data._id
            const new_model = new this._model(data)
            const result = await new_model.save()
            return await this.findById(result._id)
        } catch (error) {
            throw error
        }
    }

    findByIdAndUpdate = async (id: mongoose.Types.ObjectId, data: Object) => {
        try {
            const method = this._model.findByIdAndUpdate(id, data, {
                new: true,
            })
            const model = await this.defaultPopulate(method)
            if (model) return model
            throw new Error('Not Found')
        } catch (error) {
            if (error.codeName == 'DuplicateKey')
                throw new Error('Duplicate Entry')
            throw error
        }
    }

    updateMany = async (filter?: any, update?: any, options?: any) => {
        try {
            return await this._model.updateMany(filter, update, options)
        } catch (error) {
            throw error
        }
    }

    delete = async (id: mongoose.Types.ObjectId) => {
        if (this._model.remove) {
            return await this._model.remove({ _id: id })
        }
        throw new Error('Activate Soft Deletes on Model')
    }

    softDelete = async (id: mongoose.Types.ObjectId) => {
        if (this._model.delete) {
            return await this._model.delete({ _id: id })
        }
        throw new Error('Activate Soft Deletes on Model')
    }

    restore = async (id: mongoose.Types.ObjectId) => {
        if (this._model.restore) {
            return await this._model.restore({ _id: id })
        }
        throw new Error('This Model dont have Soft Deletes')
    }

    deleteMany = async (query: Object) => this._model.deleteMany(query)
    deleteOne = async (query: Object) => this._model.deleteMany(query)

    paginate = async (
        query: Object = {},
        options: any = {},
        withDeleted: boolean = false
    ) => {
        query = query || {}
        const limit = options && options.limit ? parseInt(options.limit) : 10
        let page: number, offset: number, skip: number
        if (options && options.offset) {
            offset = options.offset
            skip = offset
        } else if (options.page) {
            page = options.page
            skip = (page - 1) * limit
        } else {
            page = 1
            offset = 0
            skip = offset
        }

        let items = []

        const docsQuery = withDeleted
            ? this._model
                  .findWithDeleted(query, {}, options)
                  .skip(skip)
                  .limit(limit)
            : this._model
                  .find(query, {}, options)
                  .skip(skip)
                  .limit(limit)
        items = await this.defaultPopulate(docsQuery)

        const total = withDeleted
            ? await this._model.countWithDeleted(query)
            : await this._model.countDocuments(query)

        const result = {
            items,
            total,
            limit,
            offset: undefined,
            page: undefined,
            pages: undefined,
        }
        if (offset !== undefined) {
            result.offset = offset
        }
        if (page !== undefined) {
            result.page = page
            result.pages = Math.ceil(total / limit) || 1
        }
        return result
    }

    count = async (query?: Object, options?: Object) => {
        const method = this._model.countDocuments(query, options)
        return await this.defaultPopulate(method)
    }

    public defaultPopulate = async (query: any) => {
        this._with.forEach(relation => query.populate(relation))
        return await this.defaultSort(query)
    }

    public defaultSort = async (query: any) => {
        try {
            const direct = {}
            const children = {}
            for (const key in this._order) {
                if (key.indexOf('.') == -1) {
                    direct[key] = this._order[key]
                } else children[key] = this._order[key]
            }
            const results = lodash.isEmpty(direct)
                ? await query.exec()
                : await query.sort(direct).exec()
            if (results) return this.sortChildren(results, children)
            return undefined
        } catch (error) {
            throw error
        }
    }

    private sortChildren = (results: any, children: Object) => {
        if (Object.keys(children).length > 0) {
            for (const key in children) {
                const steps = key.split('.')
                if (Array.isArray(results)) {
                    return results.map((result: Object) => {
                        return this.sortArray(result, steps, children[key])
                    })
                }
                return this.sortArray(results, steps, children[key])
            }
        }
        return results
    }

    sortArray = (result: Object, steps: Array<string>, value: number) => {
        let iteration = 1
        const array = steps.reduce((accumulator, current) => {
            if (iteration < steps.length) {
                iteration++
                return accumulator ? accumulator[current] : accumulator
            }
            return accumulator
        }, result)
        array.sort(this.compare(steps[steps.length - 1], value))
        return result
    }

    private compare = (value: string, order: number) => (
        a: object,
        b: object
    ) => {
        if (a[value] < b[value]) return -1 * order
        if (a[value] > b[value]) return 1 * order
        return 0
    }
}
