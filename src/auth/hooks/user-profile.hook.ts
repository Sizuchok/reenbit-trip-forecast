import { useQuery } from '@tanstack/react-query'
import { API } from '../../common/const/api-endpoints.const'
import { ACCESS_TOKEN } from '../../common/const/local-storage-keys.const'
import { QUERY } from '../../common/const/react-query-keys.const'
import { http } from '../../service'
import { GoogleOAuthUserProfile } from '../types/auth.types'

export const useUserProfile = () => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN)

  return useQuery({
    queryKey: [QUERY.AUTH.GET_USER_PROFILE],
    queryFn: async () =>
      http.auth.get<GoogleOAuthUserProfile>(API.GOOGLE_OAUTH.USERINFO, {
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
    enabled: !!accessToken,
    retry: false,
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })
}
