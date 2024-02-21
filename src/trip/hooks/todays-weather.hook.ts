import { useQuery } from '@tanstack/react-query'
import { QUERY } from '../../common/const/react-query-keys'
import { http } from '../../service'

export const useTodaysWeather = (city: string | undefined) => {
  return useQuery({
    queryKey: [QUERY.WEATHER.TODAYS_WEATHER, city],
    queryFn: async () =>
      http.weather.get(`${city}/today`, {
        params: {
          unitGroup: 'metric',
          include: 'days',
        },
      }),
    enabled: !!city,
  })
}
