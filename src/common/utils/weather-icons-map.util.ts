import clearDayMono1 from '../../assets/weather-icons/clear-day-mono-1.svg'
import clearDayMono2 from '../../assets/weather-icons/clear-day-mono-2.svg'
import clearDayIcon from '../../assets/weather-icons/clear-day.svg'
import clearNightIcon from '../../assets/weather-icons/clear-night.svg'
import cloudyIcon from '../../assets/weather-icons/cloudy.svg'
import fogIcon from '../../assets/weather-icons/fog.svg'
import partlyCloudyDayIcon from '../../assets/weather-icons/partly-cloudy-day.svg'
import partlyCloudyNightIcon from '../../assets/weather-icons/partly-cloudy-night.svg'
import rainIcon from '../../assets/weather-icons/rain.svg'
import snowIcon from '../../assets/weather-icons/snow.svg'
import windIcon from '../../assets/weather-icons/wind.svg'
import { TWeatherIconsMap } from '../../trip/types/visual-crossing.types'

export const weatherIconsMap: TWeatherIconsMap = {
  snow: snowIcon,
  rain: rainIcon,
  fog: fogIcon,
  wind: windIcon,
  cloudy: cloudyIcon,
  'partly-cloudy-day': partlyCloudyDayIcon,
  'partly-cloudy-night': partlyCloudyNightIcon,
  'clear-day': clearDayIcon,
  'clear-night': clearNightIcon,
  'clear-day-mono-1': clearDayMono1,
  'clear-day-mono-2': clearDayMono2,
} as const
