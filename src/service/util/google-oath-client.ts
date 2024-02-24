import axios from 'axios'
import { GOOGLE_OAUTH_URL } from '../../common/const/url.const'

export const googleOauthClient = axios.create({
  baseURL: GOOGLE_OAUTH_URL,
})
