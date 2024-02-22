import { addDays } from 'date-fns'
import kyiv from '../../assets/city-images/kyiv.jpg'
import madrid from '../../assets/city-images/madrid.jpg'
import newYork from '../../assets/city-images/new-york.avif'
import oslo from '../../assets/city-images/oslo.jpg'
import paris from '../../assets/city-images/paris.jpg'
import seoul from '../../assets/city-images/seoul.jpeg'
import { City, Trip } from '../types/trip.types'

export const citiesMock: City[] = [
  {
    cityName: 'Madrid',
    address: 'madrid',
    img: madrid,
  },
  {
    cityName: 'Kyiv',
    address: 'kyiv',
    img: kyiv,
  },
  {
    cityName: 'Paris',
    address: 'paris',
    img: paris,
  },
  {
    cityName: 'Seoul',
    address: 'seoul',
    img: seoul,
  },
  {
    cityName: 'Oslo',
    address: 'oslo',
    img: oslo,
  },
  {
    cityName: 'New York',
    address: 'new york',
    img: newYork,
  },
]

export const getPredefinedTrip = () => {
  const today = new Date()

  const predefinedTrip: Trip = {
    id: Date.now(),
    address: 'seoul',
    cityName: 'Seoul',
    img: seoul,
    range: {
      from: addDays(today, 2),
      to: addDays(today, 6),
    },
  }

  return predefinedTrip
}
