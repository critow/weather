type Language =
    | 'af'
    | 'al'
    | 'ar'
    | 'az'
    | 'bg'
    | 'ca'
    | 'cz'
    | 'da'
    | 'de'
    | 'el'
    | 'en'
    | 'eu'
    | 'fa'
    | 'fi'
    | 'fr'
    | 'gl'
    | 'he'
    | 'hi'
    | 'hr'
    | 'hu'
    | 'id'
    | 'it'
    | 'ja'
    | 'kr'
    | 'la'
    | 'lt'
    | 'mk'
    | 'no'
    | 'nl'
    | 'pl'
    | 'pt'
    | 'pt_br'
    | 'ro'
    | 'ru'
    | 'sv'
    | 'se'
    | 'sk'
    | 'sl'
    | 'sp'
    | 'es'
    | 'sr'
    | 'th'
    | 'tr'
    | 'ua'
    | 'uk'
    | 'vi'
    | 'zh_cn'
    | 'zh_tw'
    | 'zu'
type Units = 'standard' | 'metric' | 'imperial'

interface Coord {
    lon: number
    lan: number
}

interface Sys {
    country: string,
    id: number,
    sunrise: number,
    sunset: number,
    type: number,
}

interface Weather {
    id: number
    main: string
    description: string
    icon: string
}

interface Wind {
    deg: number
    speed: number
}

interface Main {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level: number
    grnd_level: number
}

export interface OpenWeatherData {
    cod?: number
    coord?: Coord
    dt?: number
    id?: number
    name?: string
    sys?: Sys
    timezone?: number
    visibility?: number
    weather?: Weather[]
    wind?: Wind
    base?: string
    main?: Main
    message?: string
}

export interface OpenWeatherParam {
    q: string
    appid: string
    lang: Language
    units: Units
}
