import { useContext } from 'react'
import { DateRange } from '../../common/types/common.types'
import { toDdMmYyyy } from '../../common/utils/to-dd-mm-yyyy.util'
import { TripContext } from './trip-context'

type Props = {
  range: DateRange
  cityName: string
  img: string
  address: string
}

const TripCard = ({ cityName, img, range, address }: Props) => {
  const { setCurrentTrip: setTrip } = useContext(TripContext)

  return (
    <div
      className="min-w-48 w-48 border-2 cursor-pointer border-[#f0f0f0] hover:border-[#b0d8ff]"
      onClick={() => {
        setTrip({
          address,
          cityName,
          range,
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
