import { ChangeEvent, useContext, useRef } from 'react'
import { IoSearch } from 'react-icons/io5'
import { TripContext } from '../../trip/components/trip-context'
import { Trip } from '../../trip/types/trip.types'

const SearchBar = () => {
  const { trips, setTrips } = useContext(TripContext)
  const originalTrips = useRef<Trip[]>(trips)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    if (!value) {
      return setTrips(originalTrips.current)
    }

    setTrips(
      originalTrips.current.filter(trip => {
        const input = value.toLocaleLowerCase()
        const city = trip.cityName.toLocaleLowerCase()
        return city.includes(input)
      }),
    )
  }

  return (
    <div className="flex items-center rounded-lg bg-[#F2F4F8] p-3 min-w-48 max-w-64">
      <IoSearch className="size-5" />
      <input
        type="text"
        className="text-xs bg-inherit focus:outline-none pl-2 size-full"
        placeholder="Search your trip"
        onChange={handleChange}
      />
    </div>
  )
}
export default SearchBar
