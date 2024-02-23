export type IdToken = {
  ud: string
  azp: string
  email: string
  email_verified: boolean
  exp: number
  family_name: string
  given_name: string
  iat: number
  iss: string
  jti: string
  locale: string
  name: string
  nbf: number
  picture: string
  sub: string
}

export type User = Pick<IdToken, 'email' | 'given_name' | 'family_name' | 'name' | 'picture'> & {
  id: string
}
