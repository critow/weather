import { OpenWeatherData, OpenWeatherParam } from './types'
import OpenWeatherMap from '../../openweathermap.json'

export default class {
    readonly url: string = 'http://api.openweathermap.org/data/2.5/weather?'
    readonly param: OpenWeatherParam | any = {
        //TODO: deal with any type
        q: '',
        lat: '',
        lon: '',
        appid: OpenWeatherMap.key,
        lang: 'ru',
        units: 'metric',
    }
    data: OpenWeatherData | {} = {}

    constructor() {}

    async getWeather(query: string | { lat: number; lon: number }) {
        if (typeof query === 'string') {
            this.param.q = query
        }

        if (typeof query === 'object') {
            this.param.lat = query.lat
            this.param.lon = query.lon
        }

        const parseParam = Object.keys(this.param)
            .map(key => `${key}=${this.param[key]}`)
            .join('&')

        try {
            await fetch(this.url + parseParam).then(
                res => (this.data = res.json())
            )
            return this.data
        } catch (e) {
            throw new Error(
                `api.openweathermap.org not working. Please try again later. Error: ${e.message}`
            )
        }
    }
}
