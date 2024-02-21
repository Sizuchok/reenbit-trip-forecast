import { ElementRef, useContext, useRef } from 'react'
import { useTripForecast } from '../hooks/trip-forecast.hook'
import { TripContext } from './trip-context'
import TripForecastCard from './trip-forecast-card'

const TripForecastList = () => {
  const { currentTrip } = useContext(TripContext)
  const { data } = useTripForecast(currentTrip?.cityName, currentTrip?.range)
  const ref = useRef<ElementRef<'div'>>(null)

  const days = data?.days ?? []

  return (
    <div
      ref={ref}
      className="flex space-x-8 max-w-full overflow-x-auto"
      onWheel={event => {
        if (!ref.current) return
        ref.current.scrollLeft += event.deltaY / 4
      }}
    >
      {days.map(forecast => (
        <TripForecastCard forecast={forecast} key={forecast.datetime} />
      ))}
    </div>
  )
}

export default TripForecastList
