import { addDays } from 'date-fns'
import { City, Trip } from '../types/trip.types'

export const citiesMock: City[] = [
  {
    cityName: 'Barcelona',
    address: 'barcelona',
    img: 'https://a.cdn-hotels.com/gdcs/production81/d1983/1441d9b5-d0e6-4230-9923-646d58ba66d8.jpg',
  },
  {
    cityName: 'Kyiv',
    address: 'kyiv',
    img: 'https://www.nta.ua/wp-content/uploads/2022/04/kyyiv-1.jpg',
  },
  {
    cityName: 'Paris',
    address: 'paris',
    img: 'https://www.voyagesdereve.ch/upload/images/xParis-Tour-Eiffel.jpg.pagespeed.ic.2trsrFlXuR.jpg',
  },
  {
    cityName: 'Seoul',
    address: 'seoul',
    img: 'https://ocdn.eu/pulscms-transforms/1/ej7k9kpTURBXy82YzI4NzVjMDg1NDhiNzM3OGU4ZjZhYWFiYjExYjFjMC5qcGeTlQMAH80D6M0CMpUCzQSwAMPDkwmmODljMjA2Bt4AAaEwAQ/seul-to-stolica-korei-poludniowej.jpeg',
  },
  {
    cityName: 'Oslo',
    address: 'oslo',
    img: 'https://loveyouplanet.com/wp-content/uploads/2019/04/oslo_18.jpg',
  },
  {
    cityName: 'New York',
    address: 'new york',
    img: 'https://i.guim.co.uk/img/media/b3585cf7b5525c4f27b924754ed98b3b7fbdaf53/0_383_8048_4831/master/8048.jpg?width=480&dpr=1&s=none',
  },
]

export const getPredefinedTrip = () => {
  const today = new Date()

  const predefinedTrip: Trip = {
    id: Date.now(),
    address: 'seoul',
    cityName: 'Seoul',
    img: 'https://ocdn.eu/pulscms-transforms/1/ej7k9kpTURBXy82YzI4NzVjMDg1NDhiNzM3OGU4ZjZhYWFiYjExYjFjMC5qcGeTlQMAH80D6M0CMpUCzQSwAMPDkwmmODljMjA2Bt4AAaEwAQ/seul-to-stolica-korei-poludniowej.jpeg',
    range: {
      from: addDays(today, 2),
      to: addDays(today, 6),
    },
  }

  return predefinedTrip
}
