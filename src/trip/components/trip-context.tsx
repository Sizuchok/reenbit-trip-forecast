import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { AuthContext } from '../../auth/components/auth-context'
import { L_S_TRIPS } from '../../common/const/local-storage-keys.const'
import { DateRange } from '../../common/types/common.types'
import { getPredefinedTrip } from '../data/cities-mock'
import { Trip } from '../types/trip.types'

type SelectedTrip = Omit<Trip, 'img'>

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
  const { user } = useContext(AuthContext)

  const localTripsStr = localStorage.getItem(`${L_S_TRIPS}-${user?.id}`)

  const localTrips = localTripsStr
    ? (JSON.parse(localTripsStr, retriever) as Trip[])
    : [getPredefinedTrip()]

  const [trips, setTrips] = useState<Trip[]>(localTrips)

  useEffect(() => {
    setTrips(localTrips)
  }, [user])

  return (
    <TripContext.Provider value={{ currentTrip, setCurrentTrip, trips, setTrips }}>
      {children}
    </TripContext.Provider>
  )
}

export default TripProvider
