import BaseRepository from '../../infra/extensions/repository.extensions'
import BaseService from '../../infra/extensions/service.extensions'
import { Apiary } from './apiary.model'
import ApiaryRepository from './apiary.repository'
import axios from 'axios'

export default class ApiaryService extends BaseService {
    constructor() {
        super(new ApiaryRepository())
    }

    save = async (data: any) => {
        var config = {
            params: {
                latlng:
                    data.coordinates.latitude +
                    ',' +
                    data.coordinates.longitude,
                key: 'AIzaSyDtK2pxD890NiNQQXSkNKg-nIVBeiOE2vY',
            },
        }

        var repository = this._repository
        axios
            .get('https://maps.googleapis.com/maps/api/geocode/json?', config)
            .then(async function(response) {
                data.address = response.data.results[0].formatted_address
                return await repository.save(data)
            })
            .catch(function(error) {
                console.log(error)
            })
    }
}
