import { VisualCrossingRes } from '../trip/types/visual-crossing.types'
import { HttpService } from './http.service'

const weather = new HttpService<VisualCrossingRes>('')

export const http = {
  weather,
} as const
