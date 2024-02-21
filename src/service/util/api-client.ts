import axios from 'axios'
import { V_C_API_KEY, V_C_BASE_URL } from '../../common/const/env.const'

export const apiClient = axios.create({
  baseURL: V_C_BASE_URL,
  params: {
    key: V_C_API_KEY,
  },
})
