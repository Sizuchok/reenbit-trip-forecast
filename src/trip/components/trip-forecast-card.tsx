import { cn } from '../../common/utils/class-names.util'
import { getDayName } from '../../common/utils/get-day-name.util'
import { weatherIconsMap } from '../../common/utils/weather-icons-map.util'
import { OptionalVcDay } from '../types/visual-crossing.types'

type Props = {
  forecast: OptionalVcDay
  isFetching: boolean
}

const TripForecastCard = ({ forecast, isFetching }: Props) => {
  const date = new Date(forecast.datetime)

  return (
    <div className="text-center space-y-5">
      <div className="text-xs text-[#939393]">{getDayName(date)}</div>
      <img
        src={weatherIconsMap[forecast.icon]}
        alt={forecast.icon}
        className={cn('size-14', isFetching ? 'animate-spin' : '')}
      />
      <div className="whitespace-nowrap text-xs">
        {forecast.tempmax ?? '-'}
        {forecast.tempmax && <span className="align-top">&deg;</span>}
        <span>/</span>
        {forecast.tempmin ?? '-'}
        {forecast.tempmin && <span className="align-top">&deg;</span>}
      </div>
    </div>
  )
}
export default TripForecastCard
