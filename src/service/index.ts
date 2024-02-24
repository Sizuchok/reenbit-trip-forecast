import { VisualCrossingRes } from '../trip/types/visual-crossing.types'
import { HttpService } from './http.service'
import { apiClient } from './util/api-client'
import { googleOauthClient } from './util/google-oath-client'

const weather = new HttpService<VisualCrossingRes>(apiClient, '')
const auth = new HttpService(googleOauthClient, '')

export const http = {
  weather,
  auth,
} as const
