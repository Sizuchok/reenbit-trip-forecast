import { useContext } from 'react'
import { cn } from '../../common/utils/class-names.util'
import { toDdMmYyyy } from '../../common/utils/to-dd-mm-yyyy.util'
import { Trip } from '../types/trip.types'
import { TripContext } from './trip-context'

type Props = {
  trip: Trip
}

const TripCard = ({ trip: { cityName, img, range, address, id } }: Props) => {
  const { currentTrip, setCurrentTrip } = useContext(TripContext)

  return (
    <div
      className={cn(
        'min-w-48 w-48 border-2 cursor-pointer border-[#f0f0f0] hover:border-[#b0d8ff]',
        currentTrip?.id === id ? 'border-[#b0d8ff]' : '',
      )}
      onClick={() => {
        setCurrentTrip({
          address,
          cityName,
          range,
          id,
        })
      }}
    >
      <header className="h-44">
        <img src={img} className="size-full object-cover" />
      </header>
      <div className="p-4">
        <h4 className="font-medium">{cityName}</h4>
        <div className="mt-2 text-xs text-[#939393]">
          <time dateTime={range.from.toISOString()}>{toDdMmYyyy(range.from)}</time>
          <span> - </span>
          <time dateTime={range.to.toISOString()}>{toDdMmYyyy(range.to)}</time>
        </div>
      </div>
    </div>
  )
}
export default TripCard
