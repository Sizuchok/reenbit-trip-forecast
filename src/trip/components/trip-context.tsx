import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react'
import { DateRange } from '../../common/const/common.types'
import { L_S_TRIPS } from '../../common/const/local-storage-keys.const'
import { Trip } from '../types/trip.types'

type SelectedTrip = {
  address: string
  cityName: string
  range: DateRange
}

type TripContext = {
  currentTrip: SelectedTrip | undefined
  trips: Trip[]
  setCurrentTrip: Dispatch<SetStateAction<SelectedTrip | undefined>>
  setTrips: Dispatch<SetStateAction<Trip[]>>
}

export const TripContext = createContext<TripContext>({} as TripContext)

type Props = {
  children: ReactNode
}

const retriever = (key: string, value: DateRange) =>
  key === 'range'
    ? {
        from: new Date(value.from),
        to: new Date(value.to),
      }
    : value

const TripProvider = ({ children }: Props) => {
  const [currentTrip, setCurrentTrip] = useState<SelectedTrip | undefined>()

  const localTripsStr = localStorage.getItem(L_S_TRIPS)
  const localTrips = localTripsStr ? (JSON.parse(localTripsStr, retriever) as Trip[]) : []

  const [trips, setTrips] = useState<Trip[]>(localTrips)

  return (
    <TripContext.Provider value={{ currentTrip, setCurrentTrip, trips, setTrips }}>
      {children}
    </TripContext.Provider>
  )
}

export default TripProvider
