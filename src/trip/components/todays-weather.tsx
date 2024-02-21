import { useContext } from 'react'
import { getDayName } from '../../common/utils/get-day-name.util'
import { weatherIconsMap } from '../../common/utils/weather-icons-map.util'
import { useTodaysWeather } from '../hooks/todays-weather.hook'
import { TripContext } from './trip-context'
import TripCountdown from './trip-countdown/trip-countdown'

const TodaysWeather = () => {
  const { currentTrip: trip } = useContext(TripContext)
  const { data } = useTodaysWeather(trip?.address)
  const forecast = data?.days[0]

  return (
    <div className="h-[700px] flex flex-col justify-center items-center text-white bg-[#110e3b]">
      <div className="text-center space-y-4">
        <div className="text-3xl">{getDayName(new Date())}</div>
        <div className="text-6xl">
          {forecast && <img src={weatherIconsMap[forecast.icon]} className="size-20 inline" />}
          {forecast?.temp ?? '--'}
          <span className="text-base align-top">&deg;C</span>
        </div>
        <div className="text-xl font-light">{trip?.cityName ?? '-----'}</div>
      </div>
      <div className="mt-24">
        <TripCountdown date={trip?.range.to ?? new Date()} />
      </div>
    </div>
  )
}
export default TodaysWeather
