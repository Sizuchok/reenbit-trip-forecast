export type VisualCrossingRes = {
  days: VcDay[]
}

export type VcDay = {
  datetime: string
  temp: number
  icon: WeatherIconKey
  tempmax: number
  tempmin: number
}

export type WeatherIconKey =
  | 'snow'
  | 'rain'
  | 'fog'
  | 'wind'
  | 'cloudy'
  | 'partly-cloudy-day'
  | 'partly-cloudy-night'
  | 'clear-day'
  | 'clear-night'

export type TWeatherIconsMap = {
  [key in WeatherIconKey]: string
}
