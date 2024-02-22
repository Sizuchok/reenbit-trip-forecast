import { useContext } from 'react'
import Scrollable from '../../../common/components/scrollable'
import AddTripBtn from '../add-trip-btn'
import TripCard from '../trip-card'
import { TripContext } from '../trip-context'

const TripList = () => {
  const { trips } = useContext(TripContext)

  return (
    <div className="flex mt-12">
      <div className="grid grid-cols-[minmax(0,_1fr)_12rem] space-x-4">
        <Scrollable withArrows>
          <div className="flex gap-12">
            {trips.map(trip => (
              <TripCard trip={trip} key={trip.id} />
            ))}
          </div>
        </Scrollable>
        <AddTripBtn />
      </div>
    </div>
  )
}

export default TripList
