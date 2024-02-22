import { addDays } from 'date-fns'
import { useContext, useEffect, useRef, useState } from 'react'
import Scrollable from '../../common/components/scrollable'
import { DateRange } from '../../common/types/common.types'
import { useTripForecast } from '../hooks/trip-forecast.hook'
import { OptionalVcDay } from '../types/visual-crossing.types'
import { TripContext } from './trip-context'
import TripForecastCard from './trip-forecast-card'

type Coords = Pick<GeolocationCoordinates, 'latitude' | 'longitude'> | undefined

const TripForecastList = () => {
  // Keep date refs, so that react-query can set query keys properly
  const { current: today } = useRef(new Date())
  const { current: weekLater } = useRef(addDays(today, 6))

  const range: DateRange = {
    from: today,
    to: weekLater,
  }

  const [coords, setCoords] = useState<Coords>(undefined)
  const myLocation = coords && `${coords.latitude},${coords.longitude}`

  const { currentTrip } = useContext(TripContext)
  const { data, isFetching } = useTripForecast(
    currentTrip?.cityName ?? myLocation,
    currentTrip?.range ?? range,
  )

  const dummy = new Array(7).fill('').map(
    (_, index) =>
      ({
        datetime: addDays(today, index).toISOString(),
        icon: 'clear-day-mono-2',
      } as OptionalVcDay),
  )

  const days = data?.days ?? dummy

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        setCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      })
    }
  }, [])

  return (
    <div className="mt-10">
      <h2 className="text-xl mb-14">
        {myLocation && !currentTrip
          ? 'Forecast for the week from today'
          : `Forecast for the selected trip`}
      </h2>
      <Scrollable>
        <div className="flex space-x-8">
          {days.map(forecast => (
            <TripForecastCard forecast={forecast} key={forecast.datetime} isFetching={isFetching} />
          ))}
        </div>
      </Scrollable>
    </div>
  )
}

export default TripForecastList
