import { z } from 'zod'
import { DateRange } from '../../common/types/common.types'
import { addTripSchema } from '../schemas/add-trip.schema'

export type Trip = {
  id: number
  cityName: string
  address: string
  img: string
  range: DateRange
}

export type AddTrip = z.infer<typeof addTripSchema>

export type City = Omit<Trip, 'range' | 'id'>
