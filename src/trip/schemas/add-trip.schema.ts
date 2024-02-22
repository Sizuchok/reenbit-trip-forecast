import { differenceInDays, isAfter, isSameDay } from 'date-fns'
import { z } from 'zod'

export const addTripSchema = z
  .object({
    city: z.string(),
    startDate: z
      .string()
      .refine(value => isAfter(value, new Date()), {
        message: 'The start date should be after the present date',
      })
      .refine(value => Math.abs(differenceInDays(value, new Date())) <= 15, {
        message: 'The start date should be within the next 15 days from today',
      }),
    endDate: z
      .string()
      .refine(value => isAfter(value, new Date()), {
        message: 'The end date should be after the present date',
      })
      .refine(value => Math.abs(differenceInDays(value, new Date())) <= 15, {
        message: 'The end date should be within the next 15 days from today',
      }),
  })
  .refine(
    data => isAfter(data.endDate, data.startDate) || isSameDay(data.endDate, data.startDate),
    {
      message: 'The end date should be after or the same date as the start date!',
      path: ['endDate'],
    },
  )
