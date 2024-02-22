import { ElementRef, useContext, useRef } from 'react'
import { cn } from '../../../common/utils/class-names.util'
import AddTripBtn from '../add-trip-btn'
import TripCard from '../trip-card'
import { TripContext } from '../trip-context'

const TripList = () => {
  const { trips } = useContext(TripContext)
  const ref = useRef<ElementRef<'div'>>(null)

  return (
    <div className={cn('flex mt-12', trips.length ? 'gap-12' : '')}>
      <div
        ref={ref}
        className="flex gap-12 max-w-full overflow-x-auto"
        onWheel={event => {
          if (!ref.current) return
          ref.current.scrollLeft += event.deltaY / 4
        }}
      >
        {trips.map((trip, index) => (
          <TripCard trip={trip} key={index} />
        ))}
      </div>
      <AddTripBtn />
    </div>
  )
}
export default TripList
