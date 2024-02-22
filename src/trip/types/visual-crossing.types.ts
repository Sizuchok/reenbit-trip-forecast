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
  | 'clear-day-mono-1'
  | 'clear-day-mono-2'

export type TWeatherIconsMap = {
  [key in WeatherIconKey]: string
}

type OptionalVcDayProps = 'temp' | 'tempmax' | 'tempmin'

export type OptionalVcDay = Omit<VcDay, OptionalVcDayProps> &
  Partial<Pick<VcDay, OptionalVcDayProps>>
