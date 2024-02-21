import { DateRange } from '../../../common/types/common.types'

export const mockTrips = [
  {
    cityName: 'Barcelona',
    address: 'barcelona',
    img: 'https://a.cdn-hotels.com/gdcs/production81/d1983/1441d9b5-d0e6-4230-9923-646d58ba66d8.jpg',
    range: {
      from: new Date(),
      to: new Date(2024, 1, 28),
    } as DateRange,
  },
  {
    cityName: 'Kyiv',
    address: 'kyiv',
    img: 'https://www.nta.ua/wp-content/uploads/2022/04/kyyiv-1.jpg',
    range: {
      from: new Date(2024, 1, 26),
      to: new Date(2024, 2, 5),
    } as DateRange,
  },
  {
    cityName: 'Paris',
    address: 'paris',
    img: 'https://www.voyagesdereve.ch/upload/images/xParis-Tour-Eiffel.jpg.pagespeed.ic.2trsrFlXuR.jpg',
    range: {
      from: new Date(),
      to: new Date(2024, 2),
    } as DateRange,
  },
  {
    cityName: 'Seul',
    address: 'seul',
    img: 'https://ocdn.eu/pulscms-transforms/1/ej7k9kpTURBXy82YzI4NzVjMDg1NDhiNzM3OGU4ZjZhYWFiYjExYjFjMC5qcGeTlQMAH80D6M0CMpUCzQSwAMPDkwmmODljMjA2Bt4AAaEwAQ/seul-to-stolica-korei-poludniowej.jpeg',
    range: {
      from: new Date(),
      to: new Date(2024, 2),
    } as DateRange,
  },
  {
    cityName: 'Barcelona',
    address: 'barcelona',
    img: 'https://a.cdn-hotels.com/gdcs/production81/d1983/1441d9b5-d0e6-4230-9923-646d58ba66d8.jpg',
    range: {
      from: new Date(),
      to: new Date(2024, 2),
    } as DateRange,
  },
  {
    cityName: 'Barcelona',
    address: 'barcelona',
    img: 'https://a.cdn-hotels.com/gdcs/production81/d1983/1441d9b5-d0e6-4230-9923-646d58ba66d8.jpg',
    range: {
      from: new Date(),
      to: new Date(2024, 2),
    } as DateRange,
  },
]
