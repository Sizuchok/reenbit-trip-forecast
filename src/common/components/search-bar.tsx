import { ChangeEvent, useContext, useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { TripContext } from '../../trip/components/trip-context'

const SearchBar = () => {
  const { trips, setTrips } = useContext(TripContext)
  const [originalTrips] = useState(trips)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    if (!value) {
      return setTrips(originalTrips)
    }

    setTrips(
      originalTrips.filter(trip => {
        const input = value.toLocaleLowerCase()
        const city = trip.cityName.toLocaleLowerCase()
        return city.includes(input)
      }),
    )
  }

  return (
    <div className="flex items-center rounded-lg bg-[#F2F4F8] min-w-48 max-w-64">
      <IoSearch className="size-5 ml-3" />
      <input
        type="text"
        className="text-xs bg-inherit focus:outline-none py-3 pl-2 pr-3"
        placeholder="Search your trip"
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchBar
