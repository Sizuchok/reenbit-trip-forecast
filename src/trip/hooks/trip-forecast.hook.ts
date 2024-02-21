import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { DateRange } from '../../common/const/common.types'
import { QUERY } from '../../common/const/react-query-keys'
import { http } from '../../service'

export const useTripForecast = (city: string | undefined, range: DateRange | undefined) => {
  const from = range?.from.toISOString().split('T')[0]
  const to = range?.to.toISOString().split('T')[0]

  return useQuery({
    queryKey: [QUERY.WEATHER.TRIP_FORECAST, city, range],
    queryFn: async () =>
      http.weather.get(`${city}/${from}/${to}`, {
        params: {
          unitGroup: 'metric',
          include: 'days',
        },
      }),
    enabled: !!(city && range),
    placeholderData: keepPreviousData,
  })
}
