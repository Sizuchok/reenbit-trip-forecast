import { prefixWithZero } from './prefix-with-zero.util'

export const toDdMmYyyy = (date: Date) => {
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  const formattedDay = prefixWithZero(day)
  const formattedMonth = prefixWithZero(month)

  const formattedDate = `${formattedDay}-${formattedMonth}-${year}`
  return formattedDate
}
