const WEATHER = {
  TODAYS_WEATHER: 'get-todays-weather',
  TRIP_FORECAST: 'get-trip-forecast',
} as const

const AUTH = {
  GET_USER_PROFILE: 'get-user-profile',
} as const

export const QUERY = {
  AUTH,
  WEATHER,
} as const
