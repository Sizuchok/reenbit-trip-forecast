import { getDayName } from '../../common/utils/get-day-name.util'
import { weatherIconsMap } from '../../common/utils/weather-icons-map.util'
import { VcDay } from '../types/visual-crossing.types'

type Props = {
  forecast: VcDay
}

const TripForecastCard = ({ forecast }: Props) => {
  const date = new Date(forecast.datetime)

  return (
    <div className="text-center space-y-5">
      <div className="text-xs text-[#939393]">{getDayName(date)}</div>
      <img src={weatherIconsMap[forecast.icon]} alt={forecast.icon} className="size-14" />
      <div className="whitespace-nowrap text-xs">
        {forecast.tempmax}
        <span className="align-top">&deg;/</span>
        {forecast.tempmin}
        <span className="align-top">&deg;</span>
      </div>
    </div>
  )
}
export default TripForecastCard
