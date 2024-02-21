const weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
] as const

export const getDayName = (date: Date) => {
  const dayIndex = date.getDay()
  return weekday[dayIndex]
}
